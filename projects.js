const projects = [
  {
    imgSrc: "./screenshots/stilms/Dashboard.PNG",
    title: "STI Library Management System",
    description:
      "A Web based library project for STI College Malolos built using ReactJS(Typescript) and ASP.NET Core WebAPI. This project is our capstone project to complete our BSIT College Course in STI College Malolos.",
    badges: [
      "Typescript",
      "ReactJS",
      "ASP.Net Core WebAPI",
      "Microsoft SQL Server",
    ],
    targetModal: "#stilms",
    modal: {
      modalId: "stilms",
      title: "STI Library Management System",
      features: [
        "Multi User login for Librarian and Student Assistant",
        "Student Management - Add, Update, Delete, Search",
        "Teacher Management - Add, Update, Delete, Search",
        "Book Management - Add, Update, Delete, Search",
        "Borrowing Management - Add, Update, Delete, Search",
        "Return Management - Add, Update, Delete, Search",
        "Penalty Management - Add, Update, Delete, Search",
        "User Management - Add, Update, Delete, Search",
        "Ability to create reports of Student Attendance inside of lib",
        "Ability to generate multiple Student library cards in one click",
        "Ability to generate multiple Book Labels in one click",
        "Ability to reprinting of book labels",
        "Ability to reprinting of Student library cards",
        "Ability to generate multiple barcodes for Teachers",
        "Ability to reprinting of Teacher barcodes",
        "Kiosk mode for students to Time in and Time out",
        "OPAC - Online Public Access Catalog - Search for books and see if it is available or not",
        "Announcement Management - Add, Update, Delete, Search",
        "Course Management - Add, Update, Delete, Search",
        "Subject Management - Add, Update, Delete, Search",
        "Author Management - Add, Update, Delete, Search",
      ],
      screenshots: [
        {
          images: ["./screenshots/stilms/screenshot9.png"],
          label: "Login Page",
        },
        {
          images: ["./screenshots/stilms/Dashboard.PNG"],
          label: "Admin Main Dashboard",
        },
        {
          images: ["./screenshots/stilms/StudentAssistantDashboard.PNG"],
          label: "Student Assistant Main Dashboard",
        },
        {
          images: ["./screenshots/stilms/CollegeStudentList.PNG"],
          label: "College Student List",
        },
        {
          images: ["./screenshots/stilms/SHSStudentList.PNG"],
          label: "SHS Student List",
        },
        {
          images: ["./screenshots/stilms/AttendanceLogs.PNG"],
          label: "Student Attendance Logs",
        },
        {
          images: ["./screenshots/stilms/AddStudent.PNG"],
          label: "Add Student Page",
        },
        {
          images: ["./screenshots/stilms/screenshot3.png"],
          label: "Library Card Printing",
        },
        {
          images: ["./screenshots/stilms/AddTeacher.PNG"],
          label: "Add Teacher",
        },
        {
          images: ["./screenshots/stilms/TeachersList.PNG"],
          label: "Teachers List",
        },
        {
          images: ["./screenshots/stilms/OPAC.PNG"],
          label: "OPAC UI",
        },
        {
          images: [
            "./screenshots/stilms/AddAnnouncement-Editor.PNG",
            "./screenshots/stilms/AddAnnouncement-Image.PNG",
          ],
          label: "Announcement Creator Page",
        },
        {
          images: ["./screenshots/stilms/AnnouncementList.PNG"],
          label: "Announcement List",
        },
        {
          images: ["./screenshots/stilms/Kiosk.PNG"],
          label: "KIOSK UI",
        },
        {
          images: [
            "./screenshots/stilms/kyle.PNG",
            "./screenshots/stilms/orantia.PNG",
          ],
          label: "Sample Student Attendance",
        },
        {
          images: ["./screenshots/stilms/CreateBook.PNG"],
          label: "Sample Student Attendance",
        },
        {
          images: ["./screenshots/stilms/CreateBook.PNG"],
          label: "Adding new book",
        },
        {
          images: ["./screenshots/stilms/BookList.PNG"],
          label: "Book List",
        },
        {
          images: ["./screenshots/stilms/BookInfoWindow.PNG"],
          label: "Book Info",
        },
        {
          images: ["./screenshots/stilms/ManageAccessionsNumber.PNG"],
          label: "Manage Accession Numbers",
        },
        {
          images: ["./screenshots/stilms/CreateBorrow.PNG"],
          label: "Create Borrow",
        },
        {
          images: ["./screenshots/stilms/FindStudent.PNG"],
          label: "Find Student",
        },
        {
          images: ["./screenshots/stilms/ExtendBorrowing.PNG"],
          label: "Extend Borrow",
        },
        {
          images: ["./screenshots/stilms/PayReturnBooks.PNG"],
          label: "Pay/Return Books",
        },
        {
          images: ["./screenshots/stilms/BorrowingHistory.PNG"],
          label: "Borrowing History",
        },
        {
          images: ["./screenshots/stilms/BorrowingHistoryDetails.PNG"],
          label: "Borrowing History Details",
        },
        {
          images: ["./screenshots/stilms/ManageAuthors.PNG"],
          label: "Manage Authors",
        },
        {
          images: ["./screenshots/stilms/ManageSubjects.PNG"],
          label: "Manage Subjects",
        },
        {
          images: ["./screenshots/stilms/ManageCourses.PNG"],
          label: "Manage Courses",
        },
      ],
      footer: `
    <p>
              Developed by:
              <a href="https://gitlab.com/jerictayson">Jeric Tayson</a> <br />
              Documentators: Ronaldo Orantia, Kyle Samuel Cruz <br />
              Capstone Project for STI College Malolos
            </p>
    `,
    },
  },
  {
    imagesSrc: "./screenshots/pos/CustomerUIDefault.png",
    title: "Real time Point of Sales System on pandemic environment",
    description:
      "This project focuses on developing a real-time point of sales (POS) system tailored for businesses operating in the pandemic environment. The system is designed to provide a seamless and contactless shopping experience, prioritizing the health and safety of both customers and staff.",
    badges: ["C#", "Winforms", "SAP Crystal Report", "Microsoft SQL Server"],
    targetModal: "#pos",
  },
  {
    imagesSrc: "/screenshots/procurement-system/Dashboard.png",
    title: "Procurement System for Prudo School Supplies",
    description:
      "Procurement system for Prudo School Supplies facilitates efficient management of procurement requests, supplier interactions, and order tracking, ensuring a smooth and organized workflow.",
    badges: ["C#", "Winforms", "SAP Crystal Report", "Microsoft SQL Server"],
    targetModal: "#procurement",
  },
  {
    imagesSrc: "./screenshots/online-orders/Dashboard.png",
    title: "Online Ordering System for Foster Foods Inc",
    description: "A web online ordering system for Foster Foods Inc",
    badges: [
      "Javascript",
      "JQuery",
      "Bootstrap 5",
      "ASP.Net Core MVC",
      "Microsoft SQL Server",
      "Dev Express Report",
      "HTML",
      "CSS",
    ],
    targetModal: "#onlineordering",
  },
];

export default projects;
