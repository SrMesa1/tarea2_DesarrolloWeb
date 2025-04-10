CREATE TABLE tipo_proyecto (
    id smallserial PRIMARY KEY,
    codigo varchar(8) UNIQUE,
    descripcion varchar NOT NULL,
    abreviatura varchar(6) NOT NULL,
    fecha_registro timestamp DEFAULT CURRENT_TIMESTAMP
);
--CREATE INDEX idx_usuarios_estado ON usuarios(estado);