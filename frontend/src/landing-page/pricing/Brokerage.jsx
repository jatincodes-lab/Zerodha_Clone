import React from "react";

export default function Brokerage() {
  return (
    <div className="container my-5">
      <div className="row">
        <h2 className="opacity-75">Charges explained</h2>
        <div className="col col-12 col-md-6 text-muted">
          <div className="my-4">
            <h6 className="mb-4">Securities/Commodities transaction tax</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
              <br />
              <br />
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Transaction/Turnover Charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
              <br />
              <br />
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
              <br />
              <br />
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
              <br />
              <br />
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
              <br />
              <br />
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Call & trade</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Stamp charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">NRI brokerage charges</h6>

            <ul className="fw-normal" style={{ fontSize: "14px" }}>
              <li>₹100 per order for futures and options</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Account with debit balance</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h6>

            <ul className="fw-normal" style={{ fontSize: "14px" }}>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Margin Trading Facility (MTF)</h6>
            <ul className="fw-normal" style={{ fontSize: "14px" }}>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>MTF pledge charge: ₹30 + GST per pledge request per ISIN.</li>
            </ul>
          </div>
        </div>
        <div className="col col-12 col-md-6 text-muted">
          <div className="my-4">
            <h6 className="mb-4">GST</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">SEBI Charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">DP (Depository participant) charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
              <br />
              <br />
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
              <br />
              <br />
              Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Pledging charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              ₹30 + GST per pledge request per ISIN.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">AMC (Account maintenance charges)</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
              <a href="">Click here</a>
              <br />
              <br />
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC, <a href="">Click here</a>
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Corporate action order charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.{" "}
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Off-market transfer charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              ₹25 per transaction.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Physical CMR request</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Payment gateway charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">Delayed Payment Charges</h6>
            <p className="fw-normal" style={{ fontSize: "14px" }}>
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account. <a href="">Learn more</a>.{" "}
            </p>
          </div>
          <div className="my-4">
            <h6 className="mb-4">
              Trading using 3-in-1 account with block functionality
            </h6>
              <ul className="fw-normal" style={{ fontSize: "14px" }}>
                <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
                <li>Intraday Brokerage: 0.05% per executed order.</li>
              </ul>
          </div>
        </div>
        <div className="my-4">
          <h6 className="mb-4">Disclaimer</h6>
          <p className="fw-normal" style={{ fontSize: "14px" }}>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </div>
  );
}
