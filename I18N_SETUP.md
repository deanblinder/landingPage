# Internationalization (i18n) Setup

This project has been configured with internationalization support using `react-i18next` and `i18next`. The setup supports English and Hebrew languages with RTL (Right-to-Left) support for Hebrew.

## Features

- ✅ English and Hebrew language support
- ✅ RTL (Right-to-Left) layout for Hebrew
- ✅ Language persistence in localStorage
- ✅ Automatic language detection
- ✅ Language switcher component
- ✅ Responsive design with language-specific fonts
- ✅ Uppercase translation keys for consistency

## File Structure

```
src/
├── lib/
│   └── i18n.ts                    # i18n configuration
├── app/
│   ├── components/
│   │   └── LanguageSwitcher/      # Language switcher component
│   ├── useLayout.ts               # Layout hook with language management
│   └── layout.tsx                 # Updated layout with i18n provider
public/
└── locales/
    ├── en/
    │   └── common.json            # English translations
    └── he/
        └── common.json            # Hebrew translations
```

## Usage

### 1. Using Translations in Components

```tsx
"use client";

import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      <h1>{t("HERO_TITLE")}</h1>
      <p>{t("HERO_SUBTITLE")}</p>
      <button>{t("HERO_CTA")}</button>
    </div>
  );
};
```

### 2. Language Switcher

The language switcher is automatically included in the layout. Users can click it to toggle between English and Hebrew.

### 3. Adding New Translations

1. Add new keys to both translation files:

   - `public/locales/en/common.json`
   - `public/locales/he/common.json`

2. Use the translation key in your component:
   ```tsx
   const { t } = useTranslation("common");
   <p>{t("NEW_KEY")}</p>;
   ```

### 4. RTL Support

The layout automatically handles RTL for Hebrew:

- Document direction changes to `rtl`
- Text alignment adjusts
- Font family changes to support Hebrew characters

### 5. Language Detection

The system automatically:

- Detects the user's preferred language from browser settings
- Falls back to Hebrew as default
- Remembers the user's choice in localStorage

## Translation Keys

### Navigation

- `NAVIGATION_HOME` - Home
- `NAVIGATION_ABOUT` - About
- `NAVIGATION_PROJECTS` - Projects
- `NAVIGATION_CONTACT` - Contact
- `NAVIGATION_PRICING` - Pricing
- `NAVIGATION_TESTIMONIALS` - Testimonials
- `NAVIGATION_FAQ` - FAQ

### Hero Section

- `HERO_TITLE` - Welcome title
- `HERO_SUBTITLE` - Subtitle
- `HERO_CTA` - Call to action button
- `HERO_LEARN_MORE` - Learn more button

### About Section

- `ABOUT_TITLE` - About title
- `ABOUT_DESCRIPTION` - About description
- `ABOUT_SKILLS` - Skills
- `ABOUT_EXPERIENCE` - Experience

### Projects Section

- `PROJECTS_TITLE` - Projects title
- `PROJECTS_VIEW_PROJECT` - View project button
- `PROJECTS_VIEW_ALL` - View all projects button

### Contact Section

- `CONTACT_TITLE` - Contact title
- `CONTACT_NAME` - Name field
- `CONTACT_EMAIL` - Email field
- `CONTACT_MESSAGE` - Message field
- `CONTACT_SEND` - Send button
- `CONTACT_PHONE` - Phone
- `CONTACT_ADDRESS` - Address

### Pricing Section

- `PRICING_TITLE` - Pricing title
- `PRICING_BASIC` - Basic plan
- `PRICING_PRO` - Professional plan
- `PRICING_ENTERPRISE` - Enterprise plan
- `PRICING_MONTHLY` - Monthly
- `PRICING_YEARLY` - Yearly
- `PRICING_GET_STARTED` - Get started button

### Footer

- `FOOTER_COPYRIGHT` - Copyright text
- `FOOTER_PRIVACY` - Privacy policy
- `FOOTER_TERMS` - Terms of service

### Common

- `COMMON_LOADING` - Loading text
- `COMMON_ERROR` - Error message
- `COMMON_SUCCESS` - Success message
- `COMMON_CLOSE` - Close button
- `COMMON_SAVE` - Save button
- `COMMON_CANCEL` - Cancel button
- `COMMON_YES` - Yes
- `COMMON_NO` - No

## Styling Considerations

### RTL Support in CSS

```css
/* RTL-specific styles */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .text-left {
  text-align: right !important;
}

[dir="rtl"] .ml-auto {
  margin-left: unset !important;
  margin-right: auto !important;
}
```

### Language-specific Fonts

```css
[lang="he"] {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
}

[lang="en"] {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}
```

## Dependencies

- `i18next` - Core i18n library
- `react-i18next` - React integration
- `i18next-browser-languagedetector` - Language detection

## Configuration

The i18n configuration is in `src/lib/i18n.ts` and includes:

- Language detection from localStorage and browser
- Fallback to English
- RTL support
- Debug mode in development
- Suspense disabled for better SSR compatibility

## Key Naming Convention

All translation keys follow the UPPERCASE_WITH_UNDERSCORES convention:

- `NAVIGATION_HOME` instead of `navigation.home`
- `HERO_TITLE` instead of `hero.title`
- `CONTACT_SEND` instead of `contact.send`

This makes keys more consistent and easier to identify in code.
