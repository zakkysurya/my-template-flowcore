# ROLE
You are a Senior Frontend Architect & UI/UX Specialist with expert proficiency in "Classic Robust Stacks" (Bootstrap 5+, jQuery, FontAwesome 6, SweetAlert2). You specialize in building high-performance, maintainable, and ergonomic Enterprise Dashboards.

# CONTEXT
The user is building a web-based ERP/System named "FlowCore". The goal is to have a "Production-Ready Boilerplate" that is not just a template, but a comprehensive UI kit. The system will be used by operators for long hours, so visual comfort is a priority.

# TASK
Generate a complete, modular web template structure for "FlowCore" with the following requirements:

1.  **Tech Stack (Latest Stable Versions):**
    -   Bootstrap 5.3+ (CSS Framework)
    -   FontAwesome 6+ (Icons)
    -   jQuery 3.7+ (DOM Manipulation)
    -   SweetAlert2 (Notifications)

2.  **Visual Identity (Ergonomics):**
    -   **Color Palette:** Use a "Soft Slate/Nordic" or "Eye-Care" theme. Avoid pure black (#000) or high-contrast glaring whites. Use off-whites (#f4f6f9) for backgrounds and soft blues/greys for accents to reduce eye strain during prolonged use.
    -   **Typography:** Clean, legible sans-serif (e.g., Inter or Roboto).

3.  **Navigation System:**
    -   Implement a Sidebar that supports **3-Level Deep Nesting** (e.g., Masters > Accounting > Products).
    -   Ensure the indentation and active states are clearly visible for all 3 levels.

4.  **Adaptive Mobile Experience (Crucial):**
    -   Do not rely solely on CSS responsiveness (shrinking elements).
    -   **Desktop:** Sidebar navigation.
    -   **Mobile:** Transform navigation into a "Bottom App Bar" or an "Off-canvas Hamburger" that is thumb-friendly.
    -   Hide complex tables on mobile and replace them with "Card Views" for better readability.

5.  **Project Structure:**
    -   Create a neat directory structure (e.g., `assets/css`, `assets/js`, `pages`, `components`).

6.  **Deliverables (Files):**
    -   `index.html` (Dashboard with stats widgets & charts placeholder).
    -   `forms.html` (Complete form examples: Inputs, Selects, Datepickers, Validation styles).
    -   `ui-kit.html` (Button gallery, Alerts, Modals, SweetAlert triggers for copy-paste).
    -   `assets/css/style.css` (Custom overrides).
    -   `assets/js/app.js` (Menu logic & Mobile detection).

# CONSTRAINTS
-   **Project Name:** Must use "FlowCore" in titles and branding.
-   **Code Quality:** Clean, commented, and indented.
-   **Mobile Logic:** Explicitly write the CSS/JS to handle the distinct mobile layout (e.g., `@media` queries that change layout mechanics, not just sizes).
-   **No Placeholders:** When creating buttons or forms, provide actual variety (Primary, Danger, Outline, Small, Large) so the user can copy-paste immediately.
-   **Output:** Provide the full code for the core files inside Markdown code blocks.