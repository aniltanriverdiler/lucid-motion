import { ReactNode } from "react";

// Button Component
export interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
}

// AnimatedTitle Component
export interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

// VideoPreview Component
export interface VideoPreviewProps {
  children: ReactNode;
}

// Features - BentoTilt Component
export interface BentoTiltProps {
  children: ReactNode;
  className?: string;
}

// Features - BentoCard Component
export interface BentoCardProps {
  src: string;
  title: ReactNode;
  description?: string;
  isComingSoon?: boolean;
}

// Contact - ImageClipBox Component
export interface ImageClipBoxProps {
  src: string;
  clipClass?: string;
}

// Footer - Social Link
export interface SocialLink {
  href: string;
  icon: ReactNode;
}

// Shared cursor position type used across components
export interface CursorPosition {
  x: number;
  y: number;
}
