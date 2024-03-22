# NextJS-SaaS

This Project is to showcase my skill set in NextJS to SAAS Project

## Installation

1. Clone the repository.
2. Install setup NextJS Project in Local.

![Installation](Docs/images/images1.png)

`VScode Editor Notes:`
`Set File/Prefernces/Keyboard shortcuts/emmet balance (outwards): CTRL + M`

## Setup

3. Clear Page.tsx file

![Page.tsx Clear](Docs/images/images2.png)

`VScode Editor Notes:`
`Use Shift + ALT + O or Shift to remove unused imports`

4. Create a components folder inside which create a MaxWidthWrapper.tsx file

```javascript
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: String,
  children: ReactNode,
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
```

5. Create a lib folder inside which create a utils.ts file

```javascript
import { clsx, type classValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: classValue[]) {
  return twMerge(clsx(inputs));
}
```

6. Import clsx and Tailwind-merge package

```bash
npm install clsx tailwind-merge
```

7. Update Page.tsx with MaxWidthWrapper.tsx

```javascript
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="bg-red-500">
      <div>Hello World</div>
    </MaxWidthWrapper>
  );
}
```

8. Now lets update the CSS configuration in page.tsx

```HTML
    <MaxWidthWrapper className="mt=12 mb-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-end space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow=md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Bepuup is now Public
        </p>
      </div>
    </MaxWidthWrapper>
```

9. Lets also update Layout.tsx

```html
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
```

10. Now lets update global.css

`Visit:` [https://ui.shadcn.com/](https://ui.shadcn.com/)

Select a theme and copy the code from the [shadcn.com](https://ui.shadcn.com/)

![Theme Selector](Docs/images/images3.png)

and update entire global.css

**Note:** Do not remove below lines of code while updating global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
