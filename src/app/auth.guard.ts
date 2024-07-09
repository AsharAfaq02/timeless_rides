import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { tap } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
