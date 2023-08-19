// Reference: https://github.com/dotcore64/react-scroll-ondrag

import * as React from "react";

const maxHorizontalScroll = (dom) => dom.scrollWidth - dom.clientWidth;
const maxVerticalScroll = (dom) => dom.scrollHeight - dom.clientHeight;

/**
  Scroll your elements by dragging your mouse.

  Related Tips:
  - you can hide the scrollbar but keep it's functionality on your element using this:
    https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp

  Usage:
    const App = () => {
    const { ref, onMouseDown } = useScrollOnDrag(ref);
    return <div onMouseDown={onMouseDown} ref={ref} />;

  @param options { onDragStart, onDragEnd }
  @returns { ref, onMouseDown }
 */
export const useScrollOnDrag = (onDragStart = () => {}, onDragEnd = () => {}) => {
  const ref = React.useRef<HTMLDivElement>();
  const internalState = React.useRef({
    lastMouseX: null,
    lastMouseY: null,
    isMouseDown: false,
    isScrolling: false,
  });

  const scroll = React.useCallback(({ dx, dy, behavior = undefined }) => {
    const offsetX = Math.min(maxHorizontalScroll(ref.current), ref.current.scrollLeft + dx);
    const offsetY = Math.min(maxVerticalScroll(ref.current), ref.current.scrollTop + dy);

    ref.current.scroll({ left: offsetX, top: offsetY, behavior });
  }, []);

  const onMouseDown = React.useCallback((e) => {
    internalState.current.isMouseDown = true;
    internalState.current.lastMouseX = e.clientX;
    internalState.current.lastMouseY = e.clientY;
  }, []);

  const onMouseUp = () => {
    internalState.current.isMouseDown = false;
    internalState.current.lastMouseX = null;
    internalState.current.lastMouseY = null;

    if (internalState.current.isScrolling) {
      internalState.current.isScrolling = false;
      ref.current.style.cursor = "grab";
      onDragEnd();
    }
  };

  const onMouseMove = (e) => {
    if (!internalState.current.isMouseDown) return;

    if (!internalState.current.isScrolling) {
      internalState.current.isScrolling = true;
      ref.current.style.cursor = "grabbing";
      onDragStart();
    }

    // diff is negative because we want to scroll in the opposite direction of the movement
    const dx = -(e.clientX - internalState.current.lastMouseX);
    const dy = -(e.clientY - internalState.current.lastMouseY);
    internalState.current.lastMouseX = e.clientX;
    internalState.current.lastMouseY = e.clientY;

    scroll({ dx, dy });
  };

  React.useEffect(() => {
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ref,
    onMouseDown,
    scroll,
  };
};
