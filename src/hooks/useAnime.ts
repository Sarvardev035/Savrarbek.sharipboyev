"use client";

import { useEffect, useRef } from "react";

/**
 * useAnime — fires an anime.js animation when the element scrolls into view.
 * Returns a ref to attach to the target DOM element.
 */
export function useAnimeOnScroll<T extends HTMLElement = HTMLDivElement>(
  animationFactory: (el: T) => void,
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);
  const factoryRef = useRef(animationFactory);

  useEffect(() => {
    factoryRef.current = animationFactory;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          factoryRef.current(el);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/**
 * useStaggerOnScroll — stagger-animates direct children when the wrapper scrolls in.
 */
export function useStaggerOnScroll<T extends HTMLElement = HTMLDivElement>(
  animationFactory: (children: Element[]) => void,
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const hasAnimated = useRef(false);
  const factoryRef = useRef(animationFactory);

  useEffect(() => {
    factoryRef.current = animationFactory;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hide children initially
    Array.from(el.children).forEach((child) => {
      (child as HTMLElement).style.opacity = "0";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          factoryRef.current(Array.from(el.children));
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
