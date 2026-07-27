"use client";
import React from "react";

export function WebGLFallback({ className }: { className?: string }) {
  return <div className={className} style={{ background: "#02040b" }} />;
}

export class WebGLErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
      return this.props.children;
  }
}