export interface Regisusuario {
    iduser?: number;
    nombres?: string;
    apellidos?: string;
    identificacion?: number;
    correo?: string;
    contrasena?: string;
    createdAT?: Date;
    updateAT?: Date;
    ipTipoUsuario?: number;
    estado?: number;
    zona?: number;
}

// Esta interface es llamada en el componente contacto para tener acceso a estos datos, que son los que estan presentes en la base datos.