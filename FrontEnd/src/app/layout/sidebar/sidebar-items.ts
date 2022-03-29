//Super Admin routes access
export const SuperAdminRoutes = [
  // Super Admin Modules
  {
    path: "/admin/dashboard/main",
    title: "Tableau de bord",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/admin/appointment/viewAppointment",
    title: "Liste des Rendez-vous",
    moduleName: "appointment",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "",
    groupTitle: false,
    submenu: []
  },
  {
    path: "/admin/patients/all-patients",
    title: "Liste des Patients",
    moduleName: "patients",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "",
    groupTitle: false,
    submenu: []
  },
  {
    path: "",
    title: "Mes médecins",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    submenu: [
      {
        path: "/admin/doctors/allDoctors",
        title: "Liste des médecins",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      },
      {
        path: "/admin/doctors/add-doctor",
        title: "Ajouter un médecin",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      }
    ],
  },
  {
    path: "",
    title: "Les administrateurs",
    moduleName: "admin",
    iconType: "material-icons-two-tone",
    icon: "people_alt",
    class: "menu-toggle",
    groupTitle: false,
    submenu: [
      {
        path: "/admin/simple-admin/allAdmins",
        title: "Lister les administrateurs",
        moduleName: "admin",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      },
      {
        path: "/admin/simple-admin/add-admin",
        title: "Ajouter un administrateur",
        moduleName: "admin",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      },
    ]
  },
];

//Admin routes access
export const AdminRoutes = [
  //Admin Modules
  {
    path: "/admin/dashboard/main",
    title: "Tableau de bord",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/admin/appointment/viewAppointment",
    title: "Liste des Rendez-vous",
    moduleName: "appointment",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "",
    groupTitle: false,
    submenu: []
  },
  {
    path: "/admin/patients/all-patients",
    title: "Liste des Patients",
    moduleName: "patients",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "",
    groupTitle: false,
    submenu: []
  },
  {
    path: "",
    title: "Mes médecins",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "menu-toggle",
    groupTitle: false,
    submenu: [
      {
        path: "/admin/doctors/allDoctors",
        title: "Liste des médecins",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      },
      {
        path: "/admin/doctors/add-doctor",
        title: "Ajouter un médecin",
        moduleName: "doctors",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      }
    ],
  }
];

//Medecin routes access
export const MedecinRoutes = [
  // Medecin Modules
  {
    path: "/doctor/dashboard",
    title: "Tableau de bord",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/doctor/appointments",
    title: "Mes Rendez-vous",
    moduleName: "appointments",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/doctor/doctors",
    title: "Lister les médecins",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/doctor/patients",
    title: "Lister mes patients",
    moduleName: "patients",
    iconType: "material-icons-two-tone",
    icon: "face",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/doctor/settings",
    title: "Modifier mon profile",
    moduleName: "settings",
    iconType: "material-icons-two-tone",
    icon: "settings",
    class: "",
    groupTitle: false,
    submenu: [],
  }
];

//Patient routes access
export const PatientRoutes = [
  // Patient Modules
  {
    path: "/patient/dashboard",
    title: "Tableau de bord",
    moduleName: "dashboard",
    iconType: "material-icons-two-tone",
    icon: "home",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "",
    title: "Rendez-vous",
    moduleName: "appointments",
    iconType: "material-icons-two-tone",
    icon: "assignment",
    class: "menu-toggle",
    groupTitle: false,
    submenu: [
      {
        path: "/patient/appointments/today",
        title: "Mes rendez-vous d'aujourd'hui",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      },
      {
        path: "/patient/appointments/upcoming",
        title: "Mes rendez-vous à venir",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      },
      {
        path: "/patient/appointments/past",
        title: "Mes rendez-vous passés",
        moduleName: "appointments",
        iconType: "",
        icon: "",
        class: "ml-menu",
        groupTitle: false,
        submenu: [],
      },
    ],
  },
  {
    path: "/doctor/doctors",
    title: "Lister les médecins",
    moduleName: "doctors",
    iconType: "material-icons-two-tone",
    icon: "supervised_user_circle",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/patient/cabinet",
    title: "Maps",
    moduleName: "patient",
    iconType: "material-icons-two-tone",
    icon: "map",
    class: "",
    groupTitle: false,
    submenu: [],
  },
  {
    path: "/patient/settings",
    title: "Modifier mon profile",
    moduleName: "settings",
    iconType: "material-icons-two-tone",
    icon: "settings",
    class: "",
    groupTitle: false,
    submenu: [],
  },
];
