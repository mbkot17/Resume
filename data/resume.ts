export interface Skill {
  name: string;
  category: 'sap' | 'integration' | 'programming' | 'databases' | 'testing' | 'tools' | 'patterns' | 'devops' | 'project_management' | 'prototyping' | 'analytics' | 'documentation' | 'tracking' | 'ide' | 'version_control' | 'web' | 'messaging';
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
  tools: string[];
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
  role: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  university: string;
  location: string;
  period: string;
  track?: string;
  language?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: number;
}

export interface Startup {
  id: string;
  name: string;
  description: string;
  role: string;
  period: string;
  achievements: string[];
  technologies: string[];
}

export const skills: Skill[] = [
  // SAP Ecosystem
  { name: 'SAP ERP (SD/MM)', category: 'sap' },
  { name: 'SAP BI', category: 'sap' },
  { name: 'SAP HANA', category: 'sap' },
  
  // Integration & APIs
  { name: 'REST API', category: 'integration' },
  { name: 'SOAP API', category: 'integration' },
  { name: 'GraphQL', category: 'integration' },
  { name: 'Postman', category: 'integration' },
  { name: 'SoapUI', category: 'integration' },
  { name: 'Swagger', category: 'integration' },
  { name: 'OpenAPI', category: 'integration' },
  { name: 'WSDL', category: 'integration' },
  { name: 'Microservices', category: 'integration' },
  { name: 'API Gateway', category: 'integration' },
  { name: 'Message Queue', category: 'integration' },
  { name: 'Webhooks', category: 'integration' },
  { name: 'OAuth 2.0', category: 'integration' },
  
  // Integration Patterns
  { name: 'Event-Driven Architecture', category: 'patterns' },
  { name: 'API Gateway Pattern', category: 'patterns' },
  { name: 'Message Queue Pattern', category: 'patterns' },
  { name: 'Pub/Sub Pattern', category: 'patterns' },
  { name: 'Circuit Breaker', category: 'patterns' },
  { name: 'Retry Pattern', category: 'patterns' },
  
  // Programming Languages
  { name: 'Python', category: 'programming' },
  { name: 'JavaScript', category: 'programming' },
  { name: 'TypeScript', category: 'programming' },
  { name: 'SQL', category: 'programming' },
  { name: 'PL/SQL', category: 'programming' },
  { name: 'VBA', category: 'programming' },
  { name: 'ZPL', category: 'programming' },
  { name: 'Node.js', category: 'programming' },
  { name: 'ABAP', category: 'programming' },
  { name: 'PowerShell', category: 'programming' },
  
  // Databases
  { name: 'PostgreSQL', category: 'databases' },
  { name: 'Redis', category: 'databases' },
  { name: 'MySQL', category: 'databases' },
  { name: 'MS SQL Server', category: 'databases' },
  { name: 'MongoDB', category: 'databases' },
  { name: 'SAP HANA', category: 'databases' },
  { name: 'Database Design', category: 'databases' },
  { name: 'Query Optimization', category: 'databases' },
  { name: 'Data Modeling', category: 'databases' },
  { name: 'ETL Processes', category: 'databases' },
  
  // Testing & QA
  { name: 'Test Automation', category: 'testing' },
  { name: 'Load Testing', category: 'testing' },
  { name: 'API Testing', category: 'testing' },
  { name: 'Regression Testing', category: 'testing' },
  { name: 'TestIT', category: 'testing' },
  { name: 'SonarQube', category: 'testing' },
  { name: 'Selenium', category: 'testing' },
  { name: 'Cucumber', category: 'testing' },
  { name: 'Mockito', category: 'testing' },
  { name: 'Pytest', category: 'testing' },
  { name: 'JUnit', category: 'testing' },
  
  // DevOps & Infrastructure
  { name: 'CI/CD', category: 'devops' },
  { name: 'Jenkins', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'Ansible', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'GitLab CI', category: 'devops' },
  { name: 'Monitoring Systems', category: 'devops' },
  { name: 'System Monitoring', category: 'devops' },
  { name: 'Performance Monitoring', category: 'devops' },
  { name: 'Logging & Tracing', category: 'devops' },
  
  // Project Management
  { name: 'Notion', category: 'project_management' },
  { name: 'Trello', category: 'project_management' },
  { name: 'Jira', category: 'project_management' },
  { name: 'MS Project', category: 'project_management' },
  { name: 'Teamhood', category: 'project_management' },
  { name: 'Weeek', category: 'project_management' },
  
  // Prototyping
  // Analytics & Visualization
  { name: 'Grafana', category: 'analytics' },
  { name: 'Power BI', category: 'analytics' },
  
  // Documentation
  { name: 'UML', category: 'documentation' },
  { name: 'C4', category: 'documentation' },
  { name: 'Miro', category: 'documentation' },
  { name: 'Visio', category: 'documentation' },
  { name: 'Swagger', category: 'documentation' },
  { name: 'Confluence', category: 'documentation' },
  { name: 'Xmind', category: 'documentation' },
  
  // Tracking
  { name: 'Clockify', category: 'tracking' },
  { name: 'Toggle', category: 'tracking' },
  { name: 'Tempo', category: 'tracking' },
  
  // IDE
  { name: "JetBrains's tools", category: 'ide' },
  { name: 'Visual Studio', category: 'ide' },
  
  // Version Control
  { name: 'SVN', category: 'version_control' },
  { name: 'GitLab', category: 'version_control' },
  { name: 'GitHub', category: 'version_control' },
  { name: 'Bitbucket', category: 'version_control' },
  
  // Web Frameworks
  // Message Queues
  { name: 'Kafka', category: 'messaging' },
  { name: 'RabbitMQ', category: 'messaging' },
  { name: 'ActiveMQ', category: 'messaging' },
  { name: 'Message Queue', category: 'messaging' },
  
  // Tools
  { name: 'BPMN 2.0', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Draw.io', category: 'tools' },
  { name: 'PowerShell', category: 'tools' },
  { name: 'Profi-T', category: 'tools' },
  { name: 'Crystal Reports', category: 'tools' },
  { name: 'U.T.A. Platform', category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: 'detmir_senior',
    company: 'Детский мир',
    location: 'Москва',
    position: 'Senior SAP ERP/BI Consultant',
    period: 'Jun 2024 – Present',
    responsibilities: [
      'Проектирование и реализация комплексных интеграционных решений между SAP ERP/BI и внешними системами (кассовое ПО, платежные системы, системы маркировки, мобильные приложения): анализ бизнес-требований, проектирование архитектуры интеграций, выбор паттернов и технологий, разработка технических спецификаций',
      'Рефакторинг ключевых фронт-процессов по взаимодействию с кассой: оптимизация API-интеграций, улучшение производительности обмена данными, обеспечение надежности транзакций, рефакторинг процесса возвратов с поддержкой различных сценариев возвратов и обменов от клиентов и агентов',
      'Выполнение сбытовых настроеек для системы, работа со стандартными процессами SAP',
      'Разработка технических и проектных решений с применением современных паттернов интеграций (Event-Driven Architecture, API Gateway, Message Queue, Circuit Breaker): проектирование асинхронных потоков данных, обеспечение отказоустойчивости и масштабируемости решений',
      'Выстраивание процессов разработки и поддержки: настройка Git-инфраструктуры в корпоративной среде, конфигурация CI/CD pipelines, настройка систем мониторинга и алертинга',
      'Проектирование и оптимизация схем баз данных (SAP HANA, SQL Server, ERP): разработка эффективных структур данных, оптимизация запросов, настройка индексов, проектирование ETL-процессов',
      'Разработка микросервисов и API-решений: проектирование RESTful и SOAP API, разработка документации (Swagger/OpenAPI), реализация механизмов аутентификации и авторизации (OAuth 2.0), обеспечение безопасности и производительности',
      'Оптимизация и рефакторинг существующих решений: анализ производительности, выявление узких мест, рефакторинг legacy-кода, внедрение современных практик разработки, улучшение масштабируемости и поддерживаемости систем',
      'Проектирование и настройка асинхронных сервисов на базе BGRFC',
      'Работа со стандартными IDoc-интерфейсами SAP (WPUTAB, WPUUMS, WBBDLD), анализ и доработка процессов обмена данными',
      'Разработка на языке программирования ABAP for POSDW с использованием ABAP Development Tools: прием и валидация данных из кассовых систем, работа с очередями входящих данных, мониторинг статусов обработки через таблицы журналов, аудит и исправление ошибок в данных на раннем этапе',
      'Преобразование и обработка данных в POSDW: преобразование сырых данных в формат, понятный SAP ERP, агрегация данных для снижения нагрузки на ERP, настройка и формирование IDOC для передачи данных в ERP',
      'Программирование на Python и JavaScript для автоматизации задач: разработка скриптов для автоматизации рутинных операций, создание инструментов для обработки данных, интеграция скриптов с корпоративными системами',
      'Свободное владение инструментами управления проектами и документацией: Jira для управления задачами и отслеживания прогресса, Confluence для ведения технической документации, GitLab для управления версиями кода и CI/CD'
    ],
    tools: ['ABAP', 'ABAP for POSDW', 'BGRFC', 'JavaScript', 'TypeScript', 'Postman', 'Swagger', 'OpenAPI', 'ZPL', 'Profi-T', 'SAP (ERP, BI, HANA)', 'SQL', 'PL/SQL', 'Python', 'Node.js', 'BPMN 2.0', 'UML', 'PowerShell', 'Jira', 'Confluence', 'GitLab', 'TestIT', 'SoapUI', 'WSDL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'CI/CD', 'Monitoring Systems', 'IDOC']
  },
  {
    id: 'pgsoft',
    company: 'PG Soft',
    location: 'Texas',
    position: 'Lead ERP Consultant/Developer',
    period: 'Apr 2024 – Present',
    responsibilities: [
      'Проектирование и разработка архитектуры микросервиса для управления производственными заказами: определение точек интеграции, проектирование API-интеграций, выбор технологического стека и паттернов взаимодействия',
      'Разработка и внедрение модели прогнозирования остатков на складе с использованием машинного обучения: сбор и анализ исторических данных, создание алгоритмов прогнозирования, интеграция с системой управления складом',
      'Руководство процессом функционального и интеграционного тестирования: разработка тестовых стратегий, создание автоматизированных тест-кейсов, координация работы команды тестирования',
      'Разработка комплексных интеграций между модулями ERP-системы: проектирование потоков данных, реализация механизмов синхронизации, обеспечение отказоустойчивости и производительности',
      'Оптимизация производительности существующих интеграций: анализ узких мест, настройка мониторинга и алертинга',
      'Настройка и поддержка CI/CD процессов: конфигурация пайплайнов сборки и деплоя, автоматизация тестирования, настройка систем мониторинга'
    ],
    tools: ['JavaScript', 'Postman', 'Swagger', 'Odoo (ERP)', 'SQL', 'Python', 'BPMN 2.0', 'PowerShell', 'SoapUI', 'SQL Server', 'PostgreSQL', 'MongoDB', 'GitLab', 'CI/CD']
  },
  {
    id: 'detmir_consultant',
    company: 'Детский мир',
    location: 'Москва',
    position: 'SAP ERP/BI Consultant',
    period: 'Jun 2023 – Jun 2024',
    responsibilities: [
      'Написание сложных SQL-запросов и их оптимизация: разработка эффективных запросов для анализа больших объемов данных, оптимизация производительности запросов, настройка индексов и использование продвинутых техник SQL',
      'Разработка шаблонов этикеток на языке ZPL: проектирование и программирование шаблонов для печати этикеток, интеграция с системами маркировки, оптимизация шаблонов для различных типов принтеров',
      'Сбор потребностей бизнеса на доработку информационной системы: анализ требований пользователей, выявление проблемных зон, определение приоритетов доработок',
      'Формирование и оценка задач на доработку системы, составление функциональных спецификаций, настройка системы: разработка технических заданий, оценка трудозатрат, проектирование решений, конфигурация SAP-системы',
      'Функциональное и интеграционное тестирование проектов: разработка тестовых сценариев, выполнение функционального и интеграционного тестирования, документирование результатов, обеспечение качества решений',
      'Разработка инструкций, обучение пользователей: создание пользовательских инструкций, проведение обучения, поддержка пользователей при внедрении новых функций',
      'Ведение проектной документации, технических спецификаций: документирование проектных решений, ведение технической документации, поддержка актуальности документации',
      'Поддержка по сложным инцидентам (только 3 линия): анализ сложных инцидентов, исследование причин возникновения проблем, разработка решений для устранения инцидентов, координация работы с командами разработки'
    ],
    tools: ['ABAP', 'SQL', 'PL/SQL', 'ZPL', 'SAP (ERP, BI)', 'TestIT', 'Jira', 'Python', 'PowerShell', 'BPMN 2.0', 'JavaScript', 'Profi-T']
  },
  {
    id: 'detmir_junior',
    company: 'Детский мир',
    location: 'Москва',
    position: 'Junior SAP ERP/BI Consultant',
    period: 'Oct 2022 – Jun 2023',
    responsibilities: [
      'Анализ инцидентов в производственной системе: исследование причин возникновения проблем, анализ логов и трассировок, разработка решений для устранения инцидентов',
      'Проведение регрессионного тестирования: разработка тестовых сценариев, выполнение тестирования функциональности после изменений, документирование результатов',
      'Доработка решений для модулей SD/MM: анализ бизнес-требований, разработка функциональных спецификаций, тестирование и приемка решений',
      'Работа с базами данных: написание SQL-запросов для анализа данных, оптимизация производительности запросов, создание отчетов и аналитических выборок'
    ],
    tools: ['ABAP', 'TestIT', 'SAP (ERP, BI)', 'SQL', 'BPMN 2.0', 'PowerShell', 'Jira', 'JavaScript', 'Profi-T']
  },
  {
    id: 'ranepa',
    company: 'РАНХиГС',
    location: 'Москва',
    position: 'Project Lead',
    period: '2022',
    note: 'Победитель конкурса национальных проектов в рамках XIII Гайдаровского форума',
    responsibilities: [
      'Eco-economics startup prototype',
      'Team leadership',
      'Economic and functional modeling',
      'MVP landing site development',
      'Load testing',
      'Investment metrics calculation (NPV, IRR, PI, DPP, DP, ARR, ROI)'
    ],
    tools: ['Эконометрика', 'VBA', 'SQL', 'Draw.io']
  }
];

export const startup: Startup = {
  id: 'uta',
  name: 'U.T.A. (Unseen Test Agent)',
  description: 'Революционная AI-платформа для автоматизации тестирования с унифицированным жизненным циклом QA',
  role: 'Founder & Lead Developer',
  period: '2025 – Present',
  achievements: [
    'Разработана архитектура платформы для унификации процессов тестирования',
    'Создан единый жизненный цикл QA от планирования до отчетности',
    'Внедрена AI-поддержка для автоматической генерации тест-кейсов',
    'Интеграция с существующими системами тестирования и CI/CD',
    'Сокращение времени на регрессионное тестирование на 70%',
    'Унификация процессов тестирования для различных команд и проектов'
  ],
  technologies: ['Python', 'AI/ML', 'Test Automation', 'API Integration', 'CI/CD', 'JavaScript', 'Node.js', 'Docker', 'GitHub', 'Linux', 'CI/CD', 'Monitoring Systems', 'Postman', 'PostgreSQL', 'MongoDB', 'SQL Server']
};

export const projects: Project[] = [
  {
    id: 'zret_refactoring',
    title: 'Рефакторинг процесса реализации и возвратов заказов и розничных чеков',
    description: 'Комплексный рефакторинг ключевых процессов системы продаж возвратов и взаимодействия с кассовым фронтом',
    keyPoints: [
      'Рефакторинг процессов взаимодействия с кассовым ПО: оптимизация API-интеграций, улучшение производительности обмена данными',
      'Рефакторинг процессов возвратов: переработка логики обработки возвратов от клиентов и агентов',
      'Рефакторинг формуляров, диспетчера вызова, оптимизация процесса печати документов',
      'Рефакторинг z-отчетности: оптимизация отчетов по продаже, добавление разделителей по поставщикам и товарам',
      'Оптимизация кеш-данных справочника товаров: рефакторинг структуры кеша, удаление избыточных данных (цены), улучшение производительности, перевод расчета на BGRFC',
      'Доработка процесса агрегирования продаж и учета движения товаров: проведение дивжения по консигнационному запасу',
      'Проведение комплексного тестирования всех рефакторированных процессов, создание тест-кейсов и автотестов'
    ],
    technologies: ['SAP ERP', 'ABAP', 'BGRFC', 'Profi-T', 'API', 'Postman', 'TestIT', 'SQL'],
    role: 'Senior Consultant / Solution Architect'
  },
  {
    id: 'consignment',
    title: 'Один товар несколько поставщиков',
    description: 'Ввод консигнационного запаса в процессы сбыта с рефакторингом интеграций',
    keyPoints: [
      'Сбор и анализ требований от бизнеса',
      'Рефакторинг процессов интеграции с кассовыми системами: оптимизация обмена данными, улучшение надежности синхронизации',
      'Разработка проектного решения и функциональных спецификаций',
      'Адаптация программы расчета справочника товаров и круговой сверки товаров под новое решение',
      'Доработки отчетности по продажам и движения товара с учетом консигнационного запаса',
      'Создание тест-кейсов и автотестов',
      'Проведение функционального, интеграционного и регрессионного тестирования, создание тест-кейсов и автотестов',
      'Создание асинхронного интерфейса для проверки марок через SAP ERP на КПО при инвентризации товара',
      'Проведение демо заказачким процесса'
    ],
    technologies: ['SAP ERP', 'ABAP', 'SAP BI', 'HANA', 'JavaScript', 'Postman', 'SQL', 'TestIT', 'BGRFC'],
    role: ''
  },
  {
    id: 'virtual_pos',
    title: 'Круговая сверка POS-серверов и SAP ERP',
    description: 'Разработка и внедрение автоматизированной системы "Reconcer" для обеспечения целостности данных между центральным SAP ERP и распределенными POS-серверами.',
    keyPoints: [
      'Проектирование и разработка автоматизированной системы круговой сверки: переход от реактивной, событийной модели обновления к проактивному процессу запланированной сверки данных',
      'Реализация двухэтапного процесса сверки: Stage 1 - коррекция и обновление данных для валидных товаров через генерацию delta-файлов, Stage 2 - идентификация и удаление устаревших, невалидных и снятых с продажи товаров',
      'Разработка механизма автоматического запроса данных: SAP ERP инициирует запросы к POS-серверам по расписанию (каждые 10 дней), получает полный снимок справочника товаров, обрабатывает и генерирует файлы коррекций',
      'Автоматизация транспортировки данных: настройка автоматической доставки файлов коррекций и удалений обратно на POS-серверы через стандартный процесс обмена данными',
      'Реализация системы мониторинга и алертинга: отслеживание статусов каждого этапа процесса, автоматическая генерация уведомлений при сбоях для команды поддержки',
      'Разработка интеграции для запросов данных по требованию: создание нового интерфейса для получения данных из ERP на POS в реальном времени при отсутствии данных на кассе',
      'Оптимизация производительности: достижение улучшения производительности в 2400 раз - синхронизация 50,000 записей товаров за 18 минут вместо 3 дней стандартным решением',
      'Проведение комплексного тестирования: функциональное, интеграционное и нагрузочное тестирование всей системы, создание тест-кейсов и автотестов',
      'Поэтапное внедрение: развертывание системы на 30% сети для обеспечения стабильности перед полномасштабным запуском'
    ],
    technologies: ['SAP ERP', 'ABAP', 'ABAP Development Tools', 'BGRFC', 'IDOC', 'WBBDLD', 'SAP PI', 'SQL', 'Postman', 'TestIT', 'API Integration', 'Data Reconciliation'],
    role: ''
  },
  {
    id: 'mir_certificate',
    title: 'Электронный сертификат МИР',
    description: 'Разработка и внедрение нового платежного инструмента для всей сети магазинов (200+ точек продаж)',
    keyPoints: [
      'Написание проектного решения: анализ требований НСПК «Мир», проектирование архитектуры интеграции, определение точек взаимодействия',
      'Реализация функционала загрузки идентификаторов товаров в SAP: разработка процессов загрузки и сопровождения идентификаторов ТРУ, определяющих возможность оплаты электронным сертификатом',
      'Разработка интерфейса передачи данных на кассовый узел: создание нового потока для передачи идентификаторов товаров в кассовое ПО для использования в процессе оплаты',
      'Реализация функционала отображения кодов ТРУ, приема нового вида валюты, кастомизации способов оплаты',
      'Поддержка возвратов: реализация возвратов на кассе и для заказов, оформленных через интернет-магазин',
      'Внедрение в 200+ магазинах сети «Детский мир» с обеспечением стабильной работы'
    ],
    technologies: ['SAP ERP', 'ABAP', 'FTP', 'Profi-T', 'API', 'Postman', 'JavaScript'],
    role: ''
  },
  {
    id: 'chestny_znak',
    title: 'Переход на API 3.0 (Честный Знак)',
    description: 'Комплексный переход на API СУЗ 3.0 в процессе работы с маркировкой продукции',
    keyPoints: [
      'Описание бизнес-процессов и оценка объектов улучшений',
      'Написание проектного решения и функциональных спецификаций',
      'Создание полного потока взаимодействия с методами API в Postman (JavaScript)',
      'Создание автотестов в SAP ERP для нагрузочного тестирования',
      'Рефакторинг существующего кода'
    ],
    technologies: ['SAP ERP', 'ABAP', 'Postman', 'JavaScript', 'API', 'SoapUI'],
    role: ''
  },
  {
    id: 'kazakhstan_belarus',
    title: 'Новые виды интернет-заказов в Казахстане и Беларуси',
    description: 'Внедрение новых платежных сервисов (Халык банк и Паритет банк)',
    keyPoints: [
      'Написание проектного решения и оценка разработки',
      'Написание функциональных спецификаций',
      'Настройка системы под новые процессы',
      'Автоматизация процесса интеграционного тестирования путем создания автотестов и чат-ботов',
      'Проведение функционального, интеграционного и регрессионного тестирования'
    ],
    technologies: ['SAP ERP', 'ABAP', 'API', 'Postman', 'TestIT', 'JavaScript'],
    role: ''
  },
  {
    id: 'relabeling',
    title: 'Перемаркировка через Электронный знак',
    description: 'Разработка и внедрение полного цикла процессов перемаркировки товаров в SAP ERP для Беларуси',
    keyPoints: [
      'Анализ требований и проектирование решений',
      'Разработка функциональных спецификаций для интеграции',
      'Разработка flow в Postman для всех этапов взаимодействия',
      'Создание тест-кейсов на JavaScript',
      'Функциональное и интеграционное тестирование',
      'Обучение пользователей и подготовка инструкций',
      'Доработка интеграции с мобильным приложением сотрудника для выполнения помарочной инвентаризации'
    ],
    technologies: ['SAP ERP', 'ABAP', 'Postman', 'JavaScript', 'API', 'Mobile App Integration'],
    role: ''
  },
  {
    id: 'pricing_schemes',
    title: 'Разработка новых форматов ценников',
    description: 'Разработка новых форматов ценников и адаптация под разные типы цен и принтеров',
    keyPoints: [
      'Написани и разработка прототипа на ZPL для печати ценников для дискаунтера "ЕЩЁ"',
      'Настрока существующих формуляров для печати на A6, тесная работа с Adobe Illustrator',
      'Доработка существующих формулиров под новые БТ',
      'Адаптация сущестующих программ печати под новые формуляры',
      'Настройка и распостранение новых форматов ценников в сети магазинов'
    ],
    technologies: ['SAP ERP', 'ABAP', 'ZPL', 'Adobe Illustrator', 'ZPL'],
    role: ''
  },
  {
    id: 'warehouse_integration',
    title: 'Инвентаризация через мобильное приложение сотрудника',
    description: 'Разработка и внедрение полного цикла процессов инвентаризации через мобильное приложение сотрудника',
    keyPoints: [
      'Анализ требований и проектирование решений',
      'Разработка функциональных спецификаций для интеграции с МПС',
      'Описание и постановка задачи для разработки новых интерфейсов обмена для SAP PI',
      'Создание тест-кейсов на JavaScript в Postman для всех этапов взаимодействия',
      'Функциональное и интеграционное тестирование',
      'Обучение пользователей и подготовка инструкций'
    ],
    technologies: ['SAP ERP', 'ABAP', 'Postman', 'JavaScript', 'API', 'SAP PI', 'Mobile App Integration'],
    role: ''
  }
];

export const education: Education[] = [
  {
    id: 'innopolis',
    degree: 'Магистратура',
    field: 'Аналитика данных и вычислительная техника',
    university: 'Программная инженерия',
    location: 'Университет Иннополис',
    period: '2024-2026',
    track: 'Архитектор программного обеспечения',
    language: 'Английский'
  },
  {
    id: 'ranepa',
    degree: 'Бакалавриат (два диплома)',
    field: 'Прикладная математика & Экономика',
    university: 'Экономика математика и информационные технологии',
    location: 'РАНХиГС',
    period: '2020-2024',
    track: 'Экономика предприятий и организаций',
    language: 'Русский'
  }
];

export const certifications: Certification[] = [
  {
    id: 'sql',
    name: 'SQL for Data Science',
    issuer: 'University of California, Davis',
    year: 2021
  },
  {
    id: 'ml',
    name: 'Mathematics for Machine Learning',
    issuer: 'Imperial College London',
    year: 2022
  },
  {
    id: 'analytics',
    name: 'Data Analytics in the Public Sector',
    issuer: 'University of Michigan',
    year: 2022
  },
  {
    id: 'econometrics',
    name: 'Econometrics: Methods and Applications',
    issuer: 'Erasmus University Rotterdam',
    year: 2023
  }
];

