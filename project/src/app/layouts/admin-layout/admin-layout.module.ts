import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ContactoComponent } from '../../contacto/contacto.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RegistroUsuarioComponent } from '../../registro-usuario/registro-usuario.component';
import { EstablecimientoComponent } from '../../establecimiento/establecimiento.component';
import { ContactoService } from '../../services/contacto.service';
import { EstablecimientoService } from '../../services/establecimiento.service';
import { RegisUsuarioService } from '../../services/regis-usuario.service';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPaginationModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ContactoComponent,
    RegistroUsuarioComponent,
    EstablecimientoComponent,
  ],
  providers: [
    ContactoService,
    EstablecimientoService,
    RegisUsuarioService
  ]
})

export class AdminLayoutModule {}
