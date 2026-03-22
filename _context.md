### Design Tokens
- **Primary Color**: `bg-primary: #050816` (Dark Navy), `accent-primary: #2563eb` (Blue)
- **Gradient**: `from-blue-600 to-purple-600`
- **Font**: `Inter, sans-serif`
- **Border Radius**: `rounded-xl`
- **Shadow**: `shadow-lg shadow-blue-500/20`

### Components Created
- `layout/Header.js`: Logo và nút CTA chính.
- `layout/Footer.js`: Thông tin copyright và liên kết.
- `sections/Hero.js`: Section anh hùng với video nền.
- `sections/PainPoints.js`: So sánh nỗi đau và mong muốn của CEO.
- `sections/CoreSolution.js`: Giới thiệu giải pháp AI CEO Agent.
- `sections/DeeperPain.js`: Phân tích nguyên nhân gốc rễ của vấn đề.
- `sections/WhatIsIt.js`: Các tính năng cốt lõi của hệ thống.
- `sections/WhySbay.js`: Lợi ích chính khi sử dụng sản phẩm.
- `sections/DashboardPreview.js`: Giao diện dashboard mẫu trực quan, sinh động.
- `sections/HowItWorks.js`: Quy trình 4 bước để triển khai.
- `sections/TargetAudience.js`: Đối tượng và thời điểm nên sử dụng.
- `sections/UseCases.js`: Các ngành nghề ứng dụng hiệu quả.
- `sections/CaseStudy.js`: Câu chuyện thành công của khách hàng.
- `sections/Commitment.js`: Cam kết của SBAY.
- `sections/FinalCTA.js`: Kêu gọi hành động cuối cùng.
- `ui/Button.js`: Nút bấm tái sử dụng.
- `ui/Card.js`: Thẻ component cơ bản.
- `ui/SectionHeader.js`: Tiêu đề cho mỗi section.
- `ui/StickyCTA.js`: Nút CTA dính chân trang.
- `ui/ChatWidget.js`: Nút chat demo.
- `ui/AnimatedNumber.js`: Hiển thị số đếm tăng dần.

### Shared Data Shapes
- `FeatureItem: { icon, title, description }`
- `HowStep: { step, title, description }`
- `CaseData: { revenue, staff, ceoStatus, ... }`

### Routing Structure
- Single Page Application - No routing.
