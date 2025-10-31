# Bloom & Brush

[cloudflarebutton]

An artistic and whimsical e-commerce website for a flower boutique, featuring a unique illustrative and storybook-like design.

Bloom & Brush is an enchanting online flower boutique designed to feel like a beautiful, hand-illustrated storybook. The application showcases artisanal flower arrangements through a whimsical and artistic user interface. The core of the experience is its unique illustrative style, featuring custom sketchy graphics, elegant typography, and playful micro-interactions. Users can browse a curated collection of bouquets, view detailed descriptions and artwork for each, add them to a virtual basket, and proceed to a mock checkout. The entire experience is designed to be visually stunning, emotionally engaging, and delightfully intuitive.

## Key Features

-   **Whimsical Storybook UI:** A unique, illustrative design that makes shopping an enchanting experience.
-   **Artisanal Bouquet Showcase:** Beautifully presented flower arrangements with detailed descriptions and custom artwork.
-   **Seamless E-commerce Flow:** Intuitive journey from browsing products to adding them to a basket and checking out.
-   **Responsive Perfection:** Flawless layouts and interactions across all device sizes, from mobile to desktop.
-   **Client-Side State Management:** Fast and reliable cart management using Zustand for a smooth user experience.
-   **Elegant Micro-interactions:** Subtle animations and hover effects that add a layer of polish and delight.

## Technology Stack

-   **Framework:** React (Vite)
-   **Routing:** React Router DOM
-   **Styling:** Tailwind CSS
-   **UI Components:** shadcn/ui
-   **Icons:** Lucide React
-   **Animation:** Framer Motion
-   **State Management:** Zustand
-   **Deployment:** Cloudflare Pages & Workers

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   A code editor of your choice (e.g., VS Code).

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/bloom_and_brush.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd bloom_and_brush
    ```
3.  **Install dependencies:**
    ```sh
    bun install
    ```

## Development

To start the local development server, run the following command:

```sh
bun dev
```

The application will be available at `http://localhost:3000` (or the next available port). The server will automatically reload when you make changes to the code.

## Deployment

This project is configured for seamless deployment to the Cloudflare network.

To deploy your application, simply run the following command:

```sh
bun deploy
```

This will build the application and deploy it using Wrangler to Cloudflare Pages.

Alternatively, you can deploy directly from your GitHub repository with a single click.

[cloudflarebutton]