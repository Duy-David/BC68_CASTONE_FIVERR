import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      seller: "Become a Seller",
      JOIN: "JOIN",
      Signin: "SIGN IN",
      Discover: "Discover",
      Explore: "Explore",
      "Inspiring projects made on Fiverr": "Inspiring projects made on Fiverr",
      Community: "Community",
      "Connect with Fiverr’s team and community":
        "Connect with Fiverr’s team and community",
      Guides: "Guides",
      "In-depth guides covering business topics":
        "In-depth guides covering business topics",
      Podcast: "Podcast",
      "Inside tips from top business minds":
        "Inside tips from top business minds",
      Learn: "Learn",
      "Professional online courses, led by experts":
        "Professional online courses, led by experts",
      Blog: "Blog",
      "News, information and community stories":
        "News, information and community stories",
      "Logo Maker": "Logo Maker",
      "Create your logo instantly": "Create your logo instantly",
      "I'm looking to hire": "I'm looking to hire",
      "My team needs vetted freelance talent and a premium business solution.":
        "My team needs vetted freelance talent and a premium business solution.",
      "I want to offer Pro services": "I want to offer Pro services",
      "I'd like to work on business projects as a Pro freelancer or agency":
        "I'd like to work on business projects as a Pro freelancer or agency",
      English: "English",
      "What service are you looking for today?":
        "What service are you looking for today?",
      " Find the right": " Find the right",
      freelance: "freelance",
      "service, right away": "service, right away",
      "Trusted by:": "Trusted by:",
      "Programming & Tech": "Programming & Tech",
      "Graphics & Design": "Graphics & Design",
      "Digital Marketing": "Digital Marketing",
      "Writing & Translation": "Writing & Translation",
      "Video & Animation": "Video & Animation",
      "AI Services": "AI Services",
      "Music & Audio": "Music & Audio",
      Business: "Business",
      Consulting: "Consulting",
      "Recently Viewed & More": "Recently Viewed & More",
      "Popular services": "Popular services",
      "Website Development": "Website Development",
      "Logo Design": "Logo Design",
      SEO: "SEO",
      "Social Media Marketing": "Social Media Marketing",
      "Voice Over": "Voice Over",
      "Software Development": "Software Development",
      "Data Science & ML": "Data Science & ML",
      "Product Photographers": "Product Photographers",
      "E-Commerce Marketing": "E-Commerce Marketing",
      "Video Editing": "Video Editing",
      "Architecture & Interior Design": "Architecture & Interior Design",
      "A whole world of freelance": "A whole world of freelance",
      "talent at your fingertips": "talent at your fingertips",
      "Over 700 categories": "Over 700 categories",
      "Get results from skilled freelancers from all over the world, for every task, at any price point.":
        "Get results from skilled freelancers from all over the world, for every task, at any price point.",
      "Clear, transparent pricing": "Clear, transparent pricing",
      "Pay per project or by the hour (Pro). Payments only get released when you approve":
        "Pay per project or by the hour (Pro). Payments only get released when you approve",
      "Quality work done faster": "Quality work done faster",
      "Filter to find the right freelancers quickly and get great work delivered in no time, every time.":
        "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
      "24/7 award-winning support": "24/7 award-winning support",
      "Chat with our team to get your questions answered or resolve any issues with your orders.":
        "Chat with our team to get your questions answered or resolve any issues with your orders.",

      "New e-Commerce project management service":
        "New e-Commerce project management service",
      "made for your business": "made for your business",
      "An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing strategies, and UGC videos.":
        "An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing strategies, and UGC videos.",
      "To get started, you should have:": "To get started, you should have:",
      "An e-Commerce project requiring expertise in various fields":
        "An e-Commerce project requiring expertise in various fields",
      "A budget exceeding $1000": "A budget exceeding $1000",
      "A desire to get things done, without the hassle":
        "A desire to get things done, without the hassle",
      "Get started": "Get started",

      " What they're saying about Fiverr": "What they're saying about Fiverr",
      "Tim and Dan Joo, Co-Founders": "Tim and Dan Joo, Co-Founders",
      "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.":
        "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.",
      "Caitlin Tormey, Chief Commercial Officer":
        "Caitlin Tormey, Chief Commercial Officer",
      "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.":
        "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.",
      "Kay Kim, Co-Founder": "Kay Kim, Co-Founder",
      "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.":
        "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.",
      "Brighid Gannon (DNP, PMHNP-BC), Co-Founder":
        "Brighid Gannon (DNP, PMHNP-BC), Co-Founder",
      "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.":
        "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.",

      "Make an incredible logo": "Make an incredible logo",
      "in seconds": "in seconds",
      "Try Fiverr Logo Maker": "Try Fiverr Logo Maker",
      "Pre-designed by top talent. Just add your touch":
        "Pre-designed by top talent. Just add your touch",

      "Guides to help you grow": "Guides to help you grow",
      "Start a side business": "Start a side business",
      "Ecommerce business Ideas": "Ecommerce business Ideas",
      "Start an online business and work from home":
        "Start an online business and work from home",
      "Build a Website from Scratch": "Build a Website from Scratch",
      "Grow your business with AI": "Grow your business with AI",
      "Create a logo for your business": "Create a logo for your business",

      "Freelance services at": "Freelance services at ",
      "your fingertips!": "your fingertips!",
      "Join Fiverr": "Join Fiverr",

      Categories: "Categories",

      "Graphics & Design": "Graphics & Design",
      "Digital Marketing": "Digital Marketing",
      "Writing & Translation": "Writing & Translation",
      "Video & Animation": "Video & Animation",
      "Music & Audio": "Music & Audio",
      "Fiverr Logo Maker": "Fiverr Logo Maker",
      "Programming & Tech": "Programming & Tech",
      Data: "Data",
      Business: "Business",
      "Personal Growth & Hobbies": "Personal Growth & Hobbies",
      Photography: "Photography",

      About: "About",

      Careers: "Careers",
      "Press & News": "Press & News",
      Partnerships: "Partnerships",
      "Privacy Policy": "Privacy Policy",
      "Terms of Service": "Terms of Service",
      "Intellectual Property Claims": "Intellectual Property Claims",
      "Investor Relations": "Investor Relations",

      "Support and Education": "Support and Education",

      "Help & Support": "Help & Support",
      "Trust & Safety": "Trust & Safety",
      "Quality Guide": "Quality Guide",
      "Selling on Fiverr": "Selling on Fiverr",
      "Buying on Fiverr": "Buying on Fiverr",
      "Fiverr Guides": "Fiverr Guides",
      Learn: "Learn",
      "Online Courses": "Online Courses",
      Community: "Community",
      "Customer Success Stories": "Customer Success Stories",
      "Community Hub": "Community Hub",
      Forum: "Forum",
      Events: "Events",
      Blog: "Blog",
      Creators: "Creators",
      Affiliates: "Affiliates",
      Podcast: "Podcast",
      "Invite a Friend": "Invite a Friend",
      "Become a Seller": "Become a Seller",
      "Community Standards": "Community Standards",
      "Business Solutions": "Business Solutions",

      "About Business Solutions": "About Business Solutions",
      "Fiverr Pro": "Fiverr Pro",
      "Fiverr Certified": "Fiverr Certified",
      "Become an Agency": "Become an Agency",
      "Fiverr Enterprise": "Fiverr Enterprise",
      ClearVoice: "ClearVoice",
      "Working Not Working": "Working Not Working",
      "Contact Sales": "Contact Sales",
    },
  },
  vn: {
    translation: {
      seller: "Trở thành nhà bán hàng",
      JOIN: "Đăng Nhập",
      Signin: "Đăng Ký  ",
      Discover: "Tìm Thấy",
      Explore: "Khám phá",
      "Inspiring projects made on Fiverr":
        "Những dự án truyền cảm hứng được thực hiện trên Fiverr",
      Community: "Cộng đồng",
      "Connect with Fiverr’s team and community":
        "Kết nối với đội ngũ và cộng đồng của Fiverr",
      Guides: "  Hướng dẫn",
      "In-depth guides covering business topics":
        "Các hướng dẫn chuyên sâu về các chủ đề kinh doanh",
      Podcast: "Podcast",
      "Inside tips from top business minds":
        "Những lời khuyên từ những nhà tư duy kinh doanh hàng đầu",
      Learn: " Học tập",
      "Professional online courses, led by experts":
        "Các khóa học trực tuyến chuyên nghiệp, do các chuyên gia dẫn dắt",
      Blog: "Bài viết",
      "News, information and community stories":
        "Tin tức, thông tin và các câu chuyện cộng đồng",
      "Logo Maker": " Trình tạo Logo",
      "Create your logo instantly": "Tạo logo của bạn ngay lập tức",
      "I'm looking to hire": "Tôi đang tìm người thuê",
      "My team needs vetted freelance talent and a premium business solution.":
        "Đội ngũ của tôi cần nhân tài tự do đã được chọn lọc kỹ lưỡng và một giải pháp kinh doanh cao cấp.",
      "I want to offer Pro services": "Tôi muốn cung cấp dịch vụ Pro",
      "I'd like to work on business projects as a Pro freelancer or agency":
        "Tôi muốn làm việc trên các dự án kinh doanh với tư cách là một freelancer Pro hoặc một agency.",
      English: " Tiếng Việt",
      "What service are you looking for today?":
        "Hôm nay, bạn đang tìm kiếm dịch vụ gì",
      "Find the right": "Tìm ngay dịch vụ",
      freelance: "làm việc tự do",
      "service, right away": "phù hợp",
      "Trusted by:": "Sử dụng bởi:",
      "Programming & Tech": "Lập trình & Công nghệ",
      "Graphics & Design": "Đồ họa & Thiết kế",
      "Digital Marketing": "Tiếp thị Kỹ thuật số",
      "Writing & Translation": " Viết lách & Dịch thuật",
      "Video & Animation": "Video & Hoạt hình",
      "AI Services": "Dịch vụ AI",
      "Music & Audio": "Âm nhạc & Âm thanh",
      Business: "Kinh doanh",
      Consulting: "Tư Vấn",
      "Recently Viewed & More": " Công việc đã xem gần đây và hơn thế nữa",
      "Popular services": "Dịch vụ nổi tiếng",
      "Website Development": "Phát triển Website",
      "Logo Design": "Thiết kế Logo",
      SEO: "SEO",
      "Social Media Marketing": "Tiếp thị Truyền thông Xã hộialent at your fin",
      "Voice Over": "Lồng Tiếng",
      "Software Development": "Phát triển Phần mềm",
      "Data Science & ML": "Khoa học Dữ liệu & ML",
      "Product Photographers": " Nhiếp ảnh Sản phẩm",
      "E-Commerce Marketing": "Tiếp thị Thương mại Điện tử",
      "Video Editing": "Chỉnh sửa Video",
      "Architecture & Interior Design": "Kiến trúc & Thiết kế Nội thất",
      "A whole world of freelance": "Thế giới tài năng tự do",
      "talent at your fingertips": "trong tầm tay bạn",
      "Over 700 categories": "Hơn 700 hạng mục",
      "Get results from skilled freelancers from all over the world, for every task, at any price point.":
        "Nhận kết quả từ những freelancer có kỹ năng từ khắp nơi trên thế giới, cho mọi nhiệm vụ, ở mọi mức giá.",
      "Clear, transparent pricing": "Giá cả rõ ràng, minh bạch",
      "Pay per project or by the hour (Pro). Payments only get released when you approve":
        "Thanh toán theo dự án hoặc theo giờ (Pro). Thanh toán chỉ được thực hiện khi bạn phê duyệt.",
      "Quality work done faster":
        "Chất lượng công việc  được hoàn thành nhanh hơn",
      "Filter to find the right freelancers quickly and get great work delivered in no time, every time.":
        "Lọc để tìm freelancer phù hợp nhanh chóng và nhận được công việc chất lượng trong thời gian ngắn, mọi lúc.",
      "24/7 award-winning support": "Hỗ trợ 24/7 đoạt giải thưởng",
      "Chat with our team to get your questions answered or resolve any issues with your orders.":
        "Trò chuyện với đội ngũ của chúng tôi để nhận câu trả lời cho các câu hỏi hoặc giải quyết mọi vấn đề với đơn đặt hàng của bạn.",

      "New e-Commerce project management service":
        "Dịch vụ quản lý dự án thương mại điện tử mới",
      "made for your business": "được tạo ra cho doanh nghiệp của bạn",
      "An experienced e-Commerce project manager will plan, coordinate, and execute your project. Overseeing a team of e-Commerce experts, they'll handle everything from site building, design and content to optimization, marketing strategies, and UGC videos.":
        "Một quản lý dự án thương mại điện tử giàu kinh nghiệm sẽ lên kế hoạch, phối hợp và thực hiện dự án của bạn. Giám sát một đội ngũ chuyên gia thương mại điện tử, họ sẽ xử lý mọi thứ từ xây dựng trang web, thiết kế và nội dung đến tối ưu hóa, chiến lược tiếp thị và video do người dùng tạo (UGC).",
      "To get started, you should have:": "Để bắt đầu, bạn nên có:",
      "An e-Commerce project requiring expertise in various fields":
        "Một dự án thương mại điện tử đòi hỏi chuyên môn trong nhiều lĩnh vực",
      "A budget exceeding $1000": "Một ngân sách vượt quá $1000",
      "A desire to get things done, without the hassle":
        "Một mong muốn hoàn thành công việc mà không gặp rắc rối",
      "Get started": "Bắt đầu",
      "What they're saying about Fiverr": "Những gì họ đang nói về Fiverr",
      "Tim and Dan Joo, Co-Founders": "Tim và Dan Joo, Đồng sáng lập",
      "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does.":
        "Khi bạn muốn tạo ra một doanh nghiệp lớn hơn chính mình, bạn cần rất nhiều sự trợ giúp. Đó là điều mà Fiverr mang lại.",
      "Caitlin Tormey, Chief Commercial Officer":
        "Caitlin Tormey, Giám đốc Thương mại",
      "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day.":
        "Chúng tôi đã sử dụng Fiverr cho phát triển web Shopify, thiết kế đồ họa và phát triển backend. Làm việc với Fiverr giúp công việc của tôi dễ dàng hơn mỗi ngày.",
      "Kay Kim, Co-Founder": "Kay Kim, Đồng sáng lập",
      "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working.":
        "Thật sự thú vị khi Fiverr có các freelancer từ khắp nơi trên thế giới — điều này mở rộng nguồn nhân lực tài năng. Một trong những điều tuyệt vời nhất về Fiverr là trong khi chúng tôi đang ngủ, ai đó đang làm việc.",
      "Brighid Gannon (DNP, PMHNP-BC), Co-Founder":
        "Brighid Gannon (DNP, PMHNP-BC), Đồng sáng lập",
      "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world.":
        "Chúng tôi đã sử dụng Fiverr cho SEO, logo, trang web, nội dung, video hoạt hình — hầu như mọi thứ. Nó giống như làm việc với một người ngay bên cạnh bạn so với việc làm việc từ khắp nơi trên thế giới.",

      "Make an incredible logo": "Tạo logo ấn tượng",
      "in seconds": "trong vài giây",
      "Try Fiverr Logo Maker": "Thử Trình tạo Logo Fiverr",
      "Pre-designed by top talent. Just add your touch":
        "Thiết kế sẵn bởi các tài năng hàng đầu. Chỉ cần thêm dấu ấn của bạn",

      "Guides to help you grow": "Hướng dẫn giúp bạn phát triển",
      "Start a side business": "Bắt đầu kinh doanh thêm",
      "Ecommerce business Ideas": "Ý tưởng kinh doanh Thương mại điện tử",
      "Start an online business and work from home":
        "Bắt đầu kinh doanh trực tuyến và làm việc tại nhà",
      "Build a Website from Scratch": "Xây dựng một trang web từ đầu",
      "Grow your business with AI": "Phát triển doanh nghiệp của bạn với AI",
      "Create a logo for your business": "Tạo logo cho doanh nghiệp của bạn",

      "Freelance services at": "Làm việc tự do trong ",
      "your fingertips!": "tầm tay của bạn!",
      "Join Fiverr": "Tham gia Fiverr",

      Categories: "Danh Mục",
      "Graphics & Design": "Thiết Kế & Đồ Họa",
      "Digital Marketing": "Tiếp Thị Kỹ Thuật Số",
      "Writing & Translation": "Viết & Dịch Thuật",
      "Video & Animation": "Video & Hoạt Hình",
      "Music & Audio": "Nhạc & Âm Thanh",
      "Fiverr Logo Maker": "Tạo Logo Fiverr",
      "Programming & Tech": "Lập Trình & Công Nghệ",
      Data: "Dữ Liệu",
      Business: "Kinh Doanh",
      "Personal Growth & Hobbies": "Phát Triển Cá Nhân & Sở Thích",
      Photography: "Nhiếp Ảnh",

      About: "Về Chúng Tôi",
      Careers: "Nghề Nghiệp",
      "Press & News": "Báo Chí & Tin Tức",
      Partnerships: "Đối Tác",
      "Privacy Policy": "Chính Sách Bảo Mật",
      "Terms of Service": "Điều Khoản Dịch Vụ",
      "Intellectual Property Claims": "Khiếu Nại Quyền Sở Hữu Trí Tuệ",
      "Investor Relations": "Quan Hệ Đầu Tư",

      "Support and Education": "Hỗ Trợ và Giáo Dục",
      "Help & Support": "Giúp Đỡ & Hỗ Trợ",
      "Trust & Safety": "Tin Cậy & An Toàn",
      "Quality Guide": "Hướng Dẫn Chất Lượng",
      "Selling on Fiverr": "Bán Trên Fiverr",
      "Buying on Fiverr": "Mua Trên Fiverr",
      "Fiverr Guides": "Hướng Dẫn Fiverr",
      Learn: "Học Tập",
      "Online Courses": "Khóa Học Trực Tuyến",

      Community: "Cộng Đồng",
      "Customer Success Stories": "Câu Chuyện Thành Công Của Khách Hàng",
      "Community Hub": "Trung Tâm Cộng Đồng",
      Forum: "Diễn Đàn",
      Events: "Sự Kiện",
      Blog: "Blog",
      Creators: "Nhà Sáng Tạo",
      Affiliates: "Đối Tác Liên Kết",
      Podcast: "Podcast",
      "Invite a Friend": "Mời Bạn Bè",
      "Become a Seller": "Trở Thành Người Bán",
      "Community Standards": "Tiêu Chuẩn Cộng Đồng",

      "Business Solutions": "Giải Pháp Kinh Doanh",
      "About Business Solutions": "Giới Thiệu Giải Pháp Kinh Doanh",
      "Fiverr Pro": "Fiverr Pro",
      "Fiverr Certified": "Fiverr Certified",
      "Become an Agency": "Trở Thành Đại Lý",
      "Fiverr Enterprise": "Fiverr Enterprise",
      ClearVoice: "ClearVoice",
      "Working Not Working": "Working Not Working",
      "Contact Sales": "Liên Hệ Bộ Phận Bán Hàng",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// export default i18n;
