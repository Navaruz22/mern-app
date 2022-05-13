import React, { useCallback } from "react";
export const useMessage = () => {
  return useCallback((text) => {
    return (
      <>
        <div
          class="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img src="..." class="rounded me-2" alt="..." />
            <strong class="me-auto">Warning</strong>
            <small>11 mins ago</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body">{text}</div>
        </div>
      </>
    );
  }, []);
};
