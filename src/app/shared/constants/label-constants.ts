export class LabelConstants {
  public static LABELS = {
    LOGIN: {
      TITLE: 'Inicio de Sesión',
      SUBTITLE: 'Innova UFPS',
      TEXT: 'Ingresa tus datos para iniciar sesión',
      PLACEHOLDER: {
        USER: 'Correo electronico:',
        PASS: 'Contraseña:',
      },
      ERROR: '¡Ups! parece que las credenciales no son correctas.',
      BUTTON: 'Iniciar Sesión',
      LINK: '¿Has olvidado tu Contraseña?',
      LINKREGISTER: '¿Aún no tienes cuenta en Innova?',
    },
    FORGOT_PASSWORD: {
      TITLE: '¿Olvidaste tu contraseña?',
      TEXT:
        'Te enviaremos una nueva al correo para que puedas cambiar la contraseña',
      PLACEHOLDER: {
        EMAIL: 'Correo electronico:',
      },
      BUTTON: 'Enviar correo de recuperación',
      LINK: 'Volver a Inicio de Sesión',
    },
    CONTACTREGISTER: {
      FORM: {
        TITLE: 'Registrarme como contacto',
        SUBTITLE: 'Innova UFPS',
        CONTACTTYPE: 'Tipo de contacto',
        PLACEHOLDER: {
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          CEDULA: 'Cédula:',
          MOBILE: 'Número de Celular:',
          EMAIL: 'Correo electrónico:',
          TYPE: 'Tipo de contacto:',
          EMPRESA: 'Nombre de la empresa:',
          NIT: 'Nit:',
          ADDRESSBUSINESS: 'Direccion de empresa:',
          CITY: 'Ciudad',
          PHONE: 'Telefono fijo:',
          WEBSITE: 'Sitio web',
          APPLYFOR: 'Solicitar acompañamiento profesional',
        },
        TEXT: 'Datos de empresa',
        REGISTER_BUTTON: 'Registrarme',
        LINK: 'Volver a Inicio de Sesión',
      },
    },
    PRINCIPAL: {
      TITLE: 'Innova',
      MODULES: {
        ADVISORY: 'Asesores',
        ATTENDANCE: 'Asistencias',
        CLIENT: 'Clientes',
        CONSULTANT: 'Asesorias',
        EVENT: 'Eventos',
      },
      MENU: {
        PROFILE: 'Perfil',
        CHANGE_PASS: 'Cambiar clave',
        LOGOUT: 'Salir',
      },
    },
    ADVISORY: {
      FORM: {
        TITLE: 'Registrar asesor',
        TITLE_UPDATE: 'Actualizar asesor',
        SUBTITLE: 'Innova UFPS',
        PLACEHOLDER: {
          ID: 'Id asesor',
          STATE: 'Estado asesor',
          NAME: 'Nombres',
          LASTNAME: 'Apellidos',
          IDENTIFICATIONCARD: 'Nro. de Cedula',
          MOBILE: 'Celular',
          EMAIL: 'Corre Electronico',
          ADDRESS: 'Direccion de residencia',
        },
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
      },
      LIST: {
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: [
          'identificatioCard',
          'name',
          'lastName',
          'email',
          'mobile',
          'state',
          'actions',
        ],
        CELLS: {
          USERNAME: 'Usuario',
          IDENTIFICATIONCARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos',
          EMAIL: 'Correo electrónico:',
          MOBILE: 'Número de Celular:',
          STATE: 'Estado',
        },
      },
    },
    CLIENT: {
      FORM: {
        TITLE: 'Informacion cliente',
        TITLE_UPDATE: 'Actualizar informacion cliente',
        SUBTITLE: 'Innova UFPS',
        LABELCLASSIFICATION: 'Clasificacion de clientes',
        LABELCONTACT: 'Datos del contacto',
        LABELBUSINESS: 'Informacion de la emrpesa',
        LABELEND:
          '¿Porque medio se entero del centro de desarrollo empresarial - CDE?',
        PLACEHOLDER: {
          ID: 'Id cliente',
          DATEREGISTER: 'Fecha de registro',
          CLIENTTYPE: 'Tipo de cliente',
          NAME: 'Nombres',
          LASTNAME: 'Apellidos',
          POSITION: 'Cargo que ocupa',
          ANTIQUITY: 'Antiguedad en el cargo',
          PLACEOFBIRTH: 'Lugar de nacimiento',
          DATEOFBIRTH: 'Fecha de nacimiento',
          IDENTIFICATIONCARD: 'Nro. de Cedula',
          EDUCATIONALLEVEL: 'Nivel de estudios',
          ADDRESSCONTACT: 'Direccion de residencia',
          CITY: 'City',
          DEPARTMENT: 'Departamento',
          PHONE: 'Telefono fijo',
          MOBILE: 'Telefino celular',
          EMAIL: 'Correo electronico',
          GENDER: 'Genero',
          ETHNICGROUP: 'Grupo etnico',
          DISPLACED: 'Desplazado',
          DISABLED: 'Discapacitado',
          BUSINESSNAME: 'Nombre de la empresa',
          NIT: 'Nit',
          LEGALREPRESENTATIVE: 'Nombre de representante legal',
          LEGALCONSTITUTION: 'Constitucion legal',
          DATECONSTITUTION: 'Fecha de constitucion',
          EMPLOYEES: 'Numero de empleados',
          TC: 'T.C',
          MT: 'M.T',
          DIRECT: 'Directos',
          INDIRECT: 'Indirectos',
          ADDRESSBUSINESS: 'Direccion de la empresa',
          WEBSITE: 'Sitio web',
          TYPEOFCOMPANY: 'Tipo de empresa',
          ANOTHERTYPE: 'Otro tipo',
          COMMERCIALREGISTER: 'Registro mercantil',
          COMMERCIALREGISTERNUMBER: 'Numero de registro mercantil',
          YEARRENOVATION: 'Ultimo año de renovacion',
          MAINCODECIIU: 'Codigo principal CIIU',
          INTERNATIONALACTIVITY: 'Actividad internacional',
          COUNTRIES: 'Paises con los cuales comercializa',
          INTERNETBUSINESS: 'Realiza negocios por internet',
          SERVICES: 'Productos/Servicios que ofrece la empresa',
          MEANS: 'Medio',
          OBSERVATIONS: 'Observaciones',
        },
        BACK_BUTTON: 'Volver',
        UPDATE_BUTTON: 'Actualizar',
        STEP: {
          PREVIOUS: 'Anterior',
          NEXT: 'Siguiente',
        },
      },
      LIST: {
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        COLUMNS: [
          'businessType',
          'request',
          'identificatioCard',
          'name',
          'lastName',
          'businessName',
          'nit',
          'state',
          'actions',
        ],
        CELLS: {
          BUSINESSTYPE: 'Tipo de cliente',
          REQUEST: 'Solicitud',
          IDENTIFICATIONCARD: 'Cédula:',
          NAME: 'Nombres:',
          LASTNAME: 'Apellidos:',
          BUSINESSNAME: 'Empresa:',
          NIT: 'Nit:',
          STATE: 'Estado',
        },
        TOOLTIP: {
          ASSIGN: 'Asignar asesor',
        },
        EXPORT_BUTTON: 'Exportar datos',
      },
      ASSIGNADVISOR: {
        TITLE: 'Asignar asesor',
        SUBTITLE: 'Innova UFPS',
        LABELASSIGN: 'Asesores',
        ADVISER: 'Seleccionar asesor',
        ASSIGN_BUTTON: 'Asignar',
      },
    },
    CONSULTANT: {
      FORM: {
        TITLE: 'Registrar asesoria',
        TITLE_UPDATE: 'Actualizar asesoria',
        TITLE_VIEW: 'Informacion asesoria',
        SUBTITLE: 'Innova UFPS',
        PLACEHOLDER: {
          ADVISER: 'Asesor',
          CLIENT: 'Cliente',
          DATECONSULTANT: 'Fecha Asesoria',
          CONSULTATNTYPE: 'Tipo de asesoria',
          DURATION: 'Duracion(Horas)',
          PREPARATION: 'Tiempo de preparacion',
          AREA: 'Area',
          AFFAIR: 'Asunto',
          NOTES: 'Notas',
          STATE: 'Estado',
        },
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
      },
      LIST: {
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: [
          'adviser',
          'client',
          'date',
          'type',
          'area',
          'affair',
          'state',
          'actions',
        ],
        CELLS: {
          ADVISER: 'Asesor',
          CLIENT: 'Cliente',
          DATE: 'Fecha asesoria:',
          TYPE: 'Tipo de asesoria:',
          AREA: 'Area',
          AFFAIR: 'Asunto:',
          STATE: 'Estado',
        },
        TOOLTIP: {
          NEW: 'Nueva asesoria',
          VIEW: 'Ver asesoria',
          EDIT: 'Actualizar asesoria',
        },
      },
    },
    EVENT: {
      FORM: {
        TITLE: 'Registrar evento',
        TITLE_UPDATE: 'Actualizar evento',
        TITLE_VIEW: 'Informacion del evento',
        PLACEHOLDER: {
          TITLE: 'Titulo',
          DATESTART: 'Fecha inicio',
          DATEEND: 'Fecha fin',
          DEADLINE: 'Fecha limite de inscripcion',
          HOUR: 'Hora del evento',
          DURATION: 'Duracion del evento',
          THEME: 'Tema',
          EVENTTYPE: 'Tipo de evento',
          STATE: 'Estado',
          DESCRIPTION: 'Descripcion',
          PLACE: 'Lugar',
          CITY: 'Ciudad',
          DEPARTMENT: 'Departamento',
          EMAIL: 'Correo electronico',
          WEBSITE: 'Link del evento',
        },
        INSCRIPTION_BUTTON: 'Inscribirse',
        DESIST_BUTTON: 'Desistir',
        REGISTER_BUTTON: 'Registrar',
        UPDATE_BUTTON: 'Actualizar',
      },
      LIST: {
        FILTER: 'Buscar',
        SEARCH: 'Buscar...',
        NOTDATA: 'No hay datos',
        EXPORT: 'Exportar datos',
        COLUMNS: [
          'title',
          'dateStart',
          'dateEnd',
          'deadLine',
          'eventType',
          'state',
          'actions',
        ],
        CELLS: {
          TITLE: 'Titulo',
          DATESTART: 'Fecha inicio',
          DATEEND: 'Fecha fin:',
          DEADLINE: 'Fecha maxima de inscripcion:',
          EVENTTYPE: 'Tipo de evento',
          STATE: 'Estado',
        },
        TOOLTIP: {
          NEW: 'Nuevo evento',
          VIEW: 'Ver evento',
          EDIT: 'Actualizar evento',
          ATTENDANCE: 'Asistencia',
        },
      },
    },
  };

  public static CONTACTS_TYPES = [
    { id: 0, value: 'Emprendedor' },
    { id: 1, value: 'Empresa' },
  ];

  public static ICONS = {
    EMAIL: 'email',
    VPN_KEY: 'vpn_key',
    PERSON: 'person',
    HOME: 'home',
    SAVE: 'save',
    CREATE: 'create',
    ADD: 'add',
    OFFLINE: 'offline_pin',
    VIEW: 'pageview',
    EDIT: 'edit',
    BOOK: 'book_online',
    CHECK: 'fact_check',
    EVENT: 'event',
    REPORT: 'equalizer',
  };
}
