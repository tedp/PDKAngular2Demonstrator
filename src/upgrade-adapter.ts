import { UpgradeAdapter } from '@angular/upgrade';
import { forwardRef } from '@angular/core';

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

import { AppModule } from './app/app.module';
