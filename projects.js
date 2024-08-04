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
      subTitle: "Web based Library Management System for STI College Malolos",
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
          images: [
            {
              img: "./screenshots/stilms/screenshot9.png",
              isSmall: false,
            },
          ],
          label: "Login Page",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/Dashboard.PNG",
              isSmall: false,
            },
          ],
          label: "Admin Main Dashboard",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/StudentAssistantDashboard.PNG",
              isSmall: false,
            },
          ],
          label: "Student Assistant Main Dashboard",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/CollegeStudentList.PNG",
              isSmall: false,
            },
          ],
          label: "College Student List",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/SHSStudentList.PNG",
              isSmall: false,
            },
          ],
          label: "SHS Student List",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/AttendanceLogs.PNG",
              isSmall: false,
            },
          ],
          label: "Student Attendance Logs",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/AddStudent.PNG",
              isSmall: false,
            },
          ],
          label: "Add Student Page",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/screenshot3.png",
              isSmall: false,
            },
          ],
          label: "Library Card Printing",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/AddTeacher.PNG",
              isSmall: false,
            },
          ],
          label: "Add Teacher",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/TeachersList.PNG",
              isSmall: false,
            },
          ],
          label: "Teachers List",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/OPAC.PNG",
              isSmall: false,
            },
          ],
          label: "OPAC UI",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/AddAnnouncement-Editor.PNG",
              isSmall: false,
            },
            {
              img: "./screenshots/stilms/AddAnnouncement-Image.PNG",
              isSmall: false,
            },
          ],
          label: "Announcement Creator Page",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/AnnouncementList.PNG",
              isSmall: false,
            },
          ],
          label: "Announcement List",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/Kiosk.PNG",
              isSmall: false,
            },
          ],
          label: "KIOSK UI",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/kyle.PNG",
              isSmall: false,
            },
            {
              img: "./screenshots/stilms/orantia.PNG",
              isSmall: false,
            },
          ],
          label: "Sample Student Attendance",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/CreateBook.PNG",
              isSmall: false,
            },
          ],
          label: "Sample Student Attendance",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/CreateBook.PNG",
              isSmall: false,
            },
          ],
          label: "Adding new book",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/BookList.PNG",
              isSmall: false,
            },
          ],
          label: "Book List",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/BookInfoWindow.PNG",
              isSmall: false,
            },
          ],
          label: "Book Info",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/ManageAccessionsNumber.PNG",
              isSmall: false,
            },
          ],
          label: "Manage Accession Numbers",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/CreateBorrow.PNG",
              isSmall: false,
            },
          ],
          label: "Create Borrow",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/FindStudent.PNG",
              isSmall: false,
            },
          ],
          label: "Find Student",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/ExtendBorrowing.PNG",
              isSmall: false,
            },
          ],
          label: "Extend Borrow",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/PayReturnBooks.PNG",
              isSmall: false,
            },
          ],
          label: "Pay/Return Books",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/BorrowingHistory.PNG",
              isSmall: false,
            },
          ],
          label: "Borrowing History",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/BorrowingHistoryDetails.PNG",
              isSmall: false,
            },
          ],
          label: "Borrowing History Details",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/ManageAuthors.PNG",
              isSmall: false,
            },
          ],
          label: "Manage Authors",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/ManageSubjects.PNG",
              isSmall: false,
            },
          ],
          label: "Manage Subjects",
        },
        {
          images: [
            {
              img: "./screenshots/stilms/ManageCourses.PNG",
              isSmall: false,
            },
          ],
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
    imgSrc: "./screenshots/pos/CustomerUIDefault.png",
    title: "Real time Point of Sales System on pandemic environment",
    description:
      "This project focuses on developing a real-time point of sales (POS) system tailored for businesses operating in the pandemic environment. The system is designed to provide a seamless and contactless shopping experience, prioritizing the health and safety of both customers and staff.",
    badges: ["C#", "Winforms", "SAP Crystal Report", "Microsoft SQL Server"],
    targetModal: "#pos",
    modal: {
      modalId: "pos",
      title: "Point of Sales System",
      subTitle: " Point of Sales System on Pandemic Environment.",
      features: [
        "Multi User Login with realtime features",
        "Inventory Management - The system can Create, Update, Delete, Search products and categories",
        "Account Management - The system can Add, Update, Delete, Search Accounts",
        "Login History - The system can show login history of Users",
        "Transaction History - The system can show transaction history of cashiers and other details",
        "Account Changes History - The system can show history of account changes of users such as cashiers and admin",
      ],

      screenshots: [
        {
          images: [
            {
              img: "screenshots/pos/Login.png",
              isSmall: true,
            },
          ],
          label: "Login UI",
        },
        {
          images: [
            {
              img: "screenshots/pos/CustomerUIDefault.png",
              isSmall: false,
            },
          ],
          label: "Customer UI",
        },
        {
          images: [
            {
              img: "screenshots/pos/CustomerUI.png",
              isSmall: false,
            },
          ],
          label: "Customer UI with Products",
        },
        {
          images: [
            {
              img: "screenshots/pos/TicketOrder.png",
              isSmall: true,
            },
          ],
          label: "Ticker Order",
        },
        {
          images: [
            {
              img: "screenshots/pos/LoginUI.png",
              isSmall: true,
            },
          ],
          label: "Login UI for Customer/Admin",
        },
        {
          images: [
            {
              img: "screenshots/pos/CashierWindow.png",
              isSmall: false,
            },
          ],
          label: "Cashier Window",
        },
        {
          images: [
            {
              img: "screenshots/pos/CashierOrder.png",
              isSmall: false,
            },
          ],
          label: "Cashier Processing Order",
        },
        {
          images: [
            {
              img: "screenshots/pos/Receipt.png",
              isSmall: false,
            },
          ],
          label: "Receipt Format",
        },
        {
          images: [
            {
              img: "screenshots/pos/CashierTransactionHistory.png",
              isSmall: false,
            },
          ],
          label: "Cashier Transaction History",
        },
        {
          images: [
            {
              img: "screenshots/pos/CashierInvetoryHistory.png",
              isSmall: false,
            },
          ],
          label: "Cashier View Inventory",
        },
        {
          images: [
            {
              img: "screenshots/pos/CashierOrder.png",
              isSmall: false,
            },
          ],
          label: "Cashier Processing Order",
        },
        {
          images: [
            {
              img: "screenshots/pos/AdminCashierHistories.png",
              isSmall: false,
            },
          ],
          label: "Admin UI",
        },
        {
          images: [
            {
              img: "screenshots/pos/AdminManageAccount.png",
              isSmall: false,
            },
          ],
          label: "Manage Accounts",
        },
        {
          images: [
            {
              img: "screenshots/pos/EmployeeInformation.png",
              isSmall: true,
            },
          ],
          label: "Employee Information",
        },
        {
          images: [
            {
              img: "screenshots/pos/AdminManageInventory.png",
              isSmall: false,
            },
          ],
          label: "Manage Inventory",
        },
        {
          images: [
            {
              img: "screenshots/pos/AdminInventoryChanges.png",
              isSmall: false,
            },
          ],
          label: "Inventory Changes Window",
        },
        {
          images: [
            {
              img: "screenshots/pos/AdminAccountChanges.png",
              isSmall: false,
            },
          ],
          label: "Account Changes Window",
        },
        {
          images: [
            {
              img: "screenshots/pos/erd.png",
              isSmall: false,
            },
          ],
          label: "Entity Relationship Diagram",
        },
      ],
    },
  },
  {
    imgSrc: "/screenshots/procurement-system/Dashboard.png",
    title: "Procurement System for Prudo School Supplies",
    description:
      "Procurement system for Prudo School Supplies facilitates efficient management of procurement requests, supplier interactions, and order tracking, ensuring a smooth and organized workflow.",
    badges: ["C#", "Winforms", "SAP Crystal Report", "Microsoft SQL Server"],
    targetModal: "#procurement",
    modal: {
      modalId: "procurement",
      title: "Procurement System",
      subTitle: " Procurement System for Prudo School Supplies",
      features: [
        "Creation of multiple Request for Quotation to many suppliers",
        "Creation of PO from a Quotation",
        "Creation of Purchase Order from existing suppliers",
        "Creation of GRPO from a Purchase Order",
        "Track Accounts Payables of every suppliers",
        "Add, Edit, Delete Suppliers Information",
        "Add, Edit, Delete Inventory Products",
        "Tracking of Purchase orders of items on suppliers",
        "Track purchase price of products",
        "Records Net Discount of Purchase Orders",
        "Show reports of items on with purchase price and net discounts",
        "Show reports of Fast and Non-Moving Items",
        "Show reports of Purchase orders on suppliers",
        "Add, Edit, Delete of Payment Terms",
      ],
      screenshots: [
        
          {
            images: [
              {
                img: "screenshots/procurement-system/Dashboard.png",
                isSmall: false,
              },
            ],
            label: "Overview",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/CreateQuote.png",
                isSmall: false,
              },
            ],
            label: "Creating Quotations",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/CompareQuote.png",
                isSmall: false,
              },
            ],
            label: "Comparing Quotations",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/QuotationWindow.png",
                isSmall: false,
              },
            ],
            label: "Quotation Window",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/UpdateQuote.png",
                isSmall: false,
              },
            ],
            label: "Updating Quotation",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/CreatePO.png",
                isSmall: false,
              },
            ],
            label: "Creating Purchase Order",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/POList.png",
                isSmall: false,
              },
            ],
            label: "Purchase Order List",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/CreateGRPO.png",
                isSmall: false,
              },
            ],
            label: "Creating GRPO",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/CreateAP.png",
                isSmall: false,
              },
            ],
            label: "Making Account Payable",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/ManageCategory.png",
                isSmall: false,
              },
            ],
            label: "Categories List",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/ManageEmployee.png",
                isSmall: false,
              },
            ],
            label: "Manage Employee",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/ManagePaymentTerms.png",
                isSmall: false,
              },
            ],
            label: "Manage Payment Terms",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/ManageProduct.png",
                isSmall: false,
              },
            ],
            label: "Manage Products",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/ManageSupplier.png",
                isSmall: false,
              },
            ],
            label: "Manage Suppliers",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/ManageWallet.png",
                isSmall: false,
              },
            ],
            label: "Manage Wallets",
          },
          {
            images: [
              {
                img: "screenshots/procurement-system/erd.jpg",
                isSmall: false,
              },
            ],
            label: "Entity Relationship Diagram Products",
          },
        ],
    },
  },
];

export default projects;
