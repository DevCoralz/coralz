"use client";

import { useState } from "react";

export function PurchaseButton({ available }: { available: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="purchase-flow">
      <button className="button button--primary" type="button" onClick={() => setOpen(true)}>
        {available ? "Purchase — coming soon" : "Join the waitlist"}
      </button>
      {open && (
        <div className="purchase-panel" role="dialog" aria-modal="true" aria-labelledby="purchase-title">
          <div>
            <p className="eyebrow">Checkout boundary</p>
            <h2 id="purchase-title">{available ? "Checkout is not connected yet." : "Waitlist is not connected yet."}</h2>
            <p>This frontend intentionally stops before payment or account logic. A future checkout adapter can connect this UI to the separate backend.</p>
            <button className="button button--secondary" type="button" onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
