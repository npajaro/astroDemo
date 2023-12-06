export interface APICOSCO {
    data: Datum[];
}

export interface Datum {
    tipo:             Tipo;
    contador:         string;
    c_dula:           string;
    proceso_jur_dico: string;
    resoluci_n:       string;
    fecha_resoluci_n: Date;
    fecha_ejecutoria: Date;
    fecha_inicio:     Date;
    meses:            number;
    fecha_fin?:       Date;
    fecha_registro:   Date;
}

export enum Tipo {
    Amonestación = "AMONESTACIÓN",
    Cancelación = "CANCELACIÓN",
    Suspensión = "SUSPENSIÓN",
    Multa = "MULTA",
}
