# Requirements Document

## Introduction

This document defines the requirements for a comprehensive "Carta" / "Menú" section for the Maison Délice premium pastry website. The new section replaces the existing `MenuPreview` component, transforming it from a limited French-style preview into a full, visually stunning menu showcasing 7 product categories with Peruvian market pricing (Soles). The menu must maintain the existing boutique, elegant, and delicate visual language while presenting all products with clear hierarchy, appetizing descriptions, and orderly pricing.

## Glossary

- **Menu_Section**: The full-page section component that renders the complete Maison Délice product catalog, replacing the existing `MenuPreview` component.
- **Category_Filter**: The interactive UI element (tabs or filter buttons) that allows users to browse products by category.
- **Product_Card**: A styled card element displaying a single menu item with its name, description, price, and optional highlight label.
- **Highlight_Label**: A visual badge applied to featured products indicating special status (e.g., "Best seller", "Edición limitada", "Chef's creation", "Favorito", "Ideal para regalo").
- **Featured_Product**: A product that receives enhanced visual treatment (larger card, special styling) to draw attention.
- **Category**: One of the 7 product groupings: Tortas enteras, Porciones individuales, Postres de vitrina, Box / regalos dulces, Bebidas calientes, Bebidas frías, Especiales de temporada.
- **Design_Tokens**: The existing CSS custom properties defined in `globals.css` (colors, fonts) that govern the site's visual identity.
- **Menu_Data**: The structured data source containing all product information (name, description, price, category, highlight label, featured status).

## Requirements

### Requirement 1: Menu Section Replaces Existing Preview

**User Story:** As a site visitor, I want to see a complete product catalog instead of a limited preview, so that I can browse the full offering of Maison Délice.

#### Acceptance Criteria

1. THE Menu_Section SHALL replace the existing `MenuPreview` component in the page layout, preserving the `id="menu"` anchor for navigation.
2. THE Menu_Section SHALL display products organized into exactly 7 categories: Tortas enteras, Porciones individuales, Postres de vitrina, Box / regalos dulces, Bebidas calientes, Bebidas frías, and Especiales de temporada.
3. THE Menu_Section SHALL render an introductory header with the phrase: "Postres hechos a mano, pensados para celebrar lo cotidiano. Sabores delicados, ingredientes nobles y una vitrina creada para enamorar a primera vista."

### Requirement 2: Category Filtering

**User Story:** As a site visitor, I want to filter the menu by category, so that I can quickly find the type of product I am looking for.

#### Acceptance Criteria

1. THE Category_Filter SHALL display all 7 category names as selectable options.
2. WHEN a user selects a Category in the Category_Filter, THE Menu_Section SHALL display only the products belonging to the selected Category.
3. THE Category_Filter SHALL indicate the currently active Category with a distinct visual state using the existing Design_Tokens (accent color or similar).
4. WHEN the Menu_Section first loads, THE Category_Filter SHALL have the first category ("Tortas enteras") selected by default.
5. WHEN a user selects a different Category, THE Menu_Section SHALL animate the transition between product sets using Framer Motion.

### Requirement 3: Product Card Display

**User Story:** As a site visitor, I want to see each product's name, description, and price clearly, so that I can make informed choices.

#### Acceptance Criteria

1. THE Product_Card SHALL display the product name using the heading font (Playfair Display).
2. THE Product_Card SHALL display a brief product description using the body font (Poppins) in the muted color.
3. THE Product_Card SHALL display the product price in Peruvian soles format (e.g., "S/ 118") using the body font with semibold weight.
4. THE Product_Card SHALL apply a soft, refined hover state that transitions smoothly (minimum 300ms duration).
5. THE Product_Card SHALL use the existing Design_Tokens for all colors, ensuring visual consistency with the rest of the site.

### Requirement 4: Highlight Labels

**User Story:** As a site visitor, I want to see which products are special or popular, so that I can discover the best offerings.

#### Acceptance Criteria

1. WHEN a product has a Highlight_Label assigned, THE Product_Card SHALL display the label as a visible badge on the card.
2. THE Menu_Section SHALL support the following Highlight_Label values: "Best seller", "Edición limitada", "Chef's creation", "Favorito", and "Ideal para regalo".
3. THE Highlight_Label SHALL be styled with a subtle background color derived from the existing Design_Tokens (card, warm, or delicate palette).
4. WHEN a product has no Highlight_Label assigned, THE Product_Card SHALL render without any badge, maintaining consistent card layout.

### Requirement 5: Featured Product Treatment

**User Story:** As a site visitor, I want featured products to stand out visually, so that I can notice the chef's recommended items.

#### Acceptance Criteria

1. THE Menu_Section SHALL apply enhanced visual treatment to the following Featured_Products: "Torta de frutos rojos y vainilla", "Torta de chocolate belga", "Cheesecake de maracuyá", "Box de 6 macarons", "Croissant relleno de pistacho", and "Sweet Box Clásica".
2. WHEN a product is a Featured_Product, THE Product_Card SHALL render with a larger size or distinct styling compared to standard Product_Cards within the same Category view.
3. THE Featured_Product treatment SHALL maintain visual harmony with standard Product_Cards, using the same Design_Tokens palette.

### Requirement 6: Menu Data Structure

**User Story:** As a developer, I want the menu data to be structured in a typed, maintainable format, so that products can be easily updated or extended.

#### Acceptance Criteria

1. THE Menu_Data SHALL be defined as a TypeScript data structure with explicit types for product name, description, price, category, optional highlight label, and optional featured status.
2. THE Menu_Data SHALL contain all products across all 7 categories as specified in the content brief (5 tortas enteras, 5 porciones individuales, 7 postres de vitrina, 4 box/regalos dulces, 7 bebidas calientes, 5 bebidas frías, 4 especiales de temporada).
3. THE Menu_Data SHALL store prices as numeric values and the Menu_Section SHALL format prices with the "S/" prefix for display.

### Requirement 7: Responsive Design

**User Story:** As a site visitor on any device, I want the menu to look polished and usable, so that I can browse products comfortably on mobile, tablet, or desktop.

#### Acceptance Criteria

1. THE Menu_Section SHALL render a single-column layout on viewports narrower than 768px.
2. THE Menu_Section SHALL render a multi-column grid layout (2 or more columns) on viewports 768px and wider.
3. THE Category_Filter SHALL be horizontally scrollable on mobile viewports without layout overflow.
4. THE Product_Card text, spacing, and price display SHALL remain legible and well-proportioned at all viewport widths from 320px to 1920px.

### Requirement 8: Animation and Motion

**User Story:** As a site visitor, I want the menu to feel alive and polished with subtle animations, so that the browsing experience feels premium.

#### Acceptance Criteria

1. WHEN the Menu_Section enters the viewport, THE Menu_Section SHALL animate its header elements into view using Framer Motion.
2. WHEN products are displayed (on initial load or category change), THE Product_Cards SHALL animate in with a staggered entrance effect using Framer Motion.
3. THE Menu_Section SHALL use the same easing curve `[0.22, 1, 0.36, 1]` used by other components on the site for animation consistency.
4. WHEN a user interacts with the Category_Filter, THE transition between categories SHALL complete within 500ms to maintain responsiveness.

### Requirement 9: Visual Design Consistency

**User Story:** As a brand stakeholder, I want the menu section to match the existing site's premium aesthetic, so that the brand experience is cohesive.

#### Acceptance Criteria

1. THE Menu_Section SHALL use only colors defined in the existing Design_Tokens: background (#FFF6EE), primary/foreground (#8B5E4A), accent (#E89AAE), hover (#B97A56), card (#F6D6DE), warm (#F4C7A1), delicate (#F8E7B5), and muted (#7A6F6A).
2. THE Menu_Section SHALL use Playfair Display for headings and Poppins for body text, consistent with the site's typographic system.
3. THE Product_Card SHALL use rounded corners (rounded-2xl or rounded-3xl) and soft shadows consistent with the card styling used in other site components.
4. IF fine separators are used between list items, THEN THE Menu_Section SHALL style separators with a subtle border color (primary at 5-10% opacity) consistent with the existing `MenuPreview` separator style.

### Requirement 10: Accessibility

**User Story:** As a site visitor using assistive technology, I want the menu to be navigable and understandable, so that I can browse products regardless of ability.

#### Acceptance Criteria

1. THE Category_Filter SHALL be keyboard-navigable, allowing users to switch categories using Tab and Enter/Space keys.
2. THE Category_Filter SHALL use appropriate ARIA roles (tablist, tab, tabpanel) to communicate the tab-based navigation pattern to screen readers.
3. THE Menu_Section SHALL use semantic HTML elements (section, heading hierarchy, lists) to structure the content for screen readers.
4. WHEN a category is selected, THE Category_Filter SHALL set `aria-selected="true"` on the active tab and `aria-selected="false"` on inactive tabs.
