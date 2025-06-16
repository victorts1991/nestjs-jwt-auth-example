import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule, 
    JwtModule.registerAsync({
      imports: [ConfigModule.forRoot({ isGlobal: true })], 
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), 
        signOptions: { expiresIn: '600s' }, 
      }),
      inject: [ConfigService], 
    }),
  ],
  providers: [AuthService, JwtStrategy], 
  exports: [AuthService], controllers: [AuthController], 
})
export class AuthModule {}