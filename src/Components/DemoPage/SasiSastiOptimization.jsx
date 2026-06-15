import React, { useState } from 'react';
import { Globe, RefreshCw, Layers, Sliders, DollarSign, CheckCircle } from 'lucide-react';

export default function SasiSastiOptimization() {
  const [currency, setCurrency] = useState('INR');
  const [exchangeRate, setExchangeRate] = useState(1);

  // Simulated live international currency converter pricing rules
  const basePriceINR = 4500; 
  
  const handleCurrencyChange = (cur) => {
    setCurrency(cur);
    if (cur === 'USD') setExchangeRate(0.012);
    else if (cur === 'AED') setExchangeRate(0.044);
    else setExchangeRate(1);
  };

  return (
    <div style={{ margin: '24px 16px', padding: '20px', background: '#FFF', borderRadius: '16px', border: '1px solid #111', fontFamily: 'sans-serif' }}>
      
      {/* Enterprise Feature Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
        <Globe size={16} color="#111" />
        <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1px', textTransform: 'uppercase', color: '#111' }}>
          ENTERPRISE SCALING FEATURES
        </span>
      </div>

      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '700', color: '#111' }}>
        Global Operations Demo
      </h3>
      <p style={{ margin: '0 0 20px 0', fontSize: '13px', color: '#666', lineHeight: '1.4' }}>
        Interactive engineering solutions built to handle heavy multi-country traffic and remove checkout drop-offs.
      </p>

      {/* Feature 1: Dynamic Multi-Currency Pricing engine */}
      <div style={{ background: '#F9F9F8', padding: '14px', borderRadius: '12px', marginBottom: '16px', border: '1px solid #ECEBE9' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '13px', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sliders size={14} /> 1. Global Currency Engine
          </span>
          {/* Currency Switcher Pill */}
          <div style={{ display: 'flex', gap: '4px', background: '#EAEAEA', padding: '2px', borderRadius: '6px' }}>
            {['INR', 'USD', 'AED'].map((cur) => (
              <button
                key={cur}
                onClick={() => handleCurrencyChange(cur)}
                style={{
                  border: 'none',
                  background: currency === cur ? '#FFF' : 'transparent',
                  color: '#111',
                  fontSize: '11px',
                  fontWeight: '700',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {cur}
              </button>
            ))}
          </div>
        </div>
        <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#666' }}>
          Automatically detects the shopper's country location to switch payment routing instantly.
        </p>
        <div style={{ fontSize: '16px', fontWeight: '700', color: '#111' }}>
          Display Price: {currency === 'INR' ? '₹' : currency === 'USD' ? '$' : 'AED '}{(basePriceINR * exchangeRate).toFixed(2)}
        </div>
      </div>

      {/* Feature 2: Unified Inventory Matrix (Solving the two numbers chaos) */}
      <div style={{ background: '#F9F9F8', padding: '14px', borderRadius: '12px', marginBottom: '16px', border: '1px solid #ECEBE9' }}>
        <span style={{ fontSize: '13px', fontWeight: '600', color: '#333', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
          <Layers size={14} /> 2. Unified Inventory Consolidation
        </span>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666', lineHeight: '1.4' }}>
          Instead of separating customer requests across two different WhatsApp numbers, sales are safely piped into a centralized database.
        </p>
        
        {/* Visual Map Diagram */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FFF', padding: '10px', borderRadius: '8px', border: '1px solid #EEE' }}>
          <div style={{ fontSize: '11px', textAlign: 'center', width: '30%' }}>
            <div style={{ fontWeight: '700', color: '#E11D48' }}>WhatsApp 1</div>
            <span style={{ color: '#999', fontSize: '10px' }}>Front Office</span>
          </div>
          <RefreshCw size={14} color="#666" className="animate-spin" />
          <div style={{ background: '#111', color: '#FFF', fontSize: '11px', padding: '6px 10px', borderRadius: '6px', fontWeight: '700', textAlign: 'center' }}>
            Central Database
          </div>
          <RefreshCw size={14} color="#666" />
          <div style={{ fontSize: '11px', textAlign: 'center', width: '30%' }}>
            <div style={{ fontWeight: '700', color: '#E11D48' }}>WhatsApp 2</div>
            <span style={{ color: '#999', fontSize: '10px' }}>Back Office</span>
          </div>
        </div>
      </div>

      {/* Feature 3: Automated Shipping Gateway Rule (No Returns/No COD Management) */}
      <div style={{ background: '#FDF2F2', padding: '14px', borderRadius: '12px', border: '1px solid #FDE2E2' }}>
        <span style={{ fontSize: '13px', fontWeight: '600', color: '#991B1B', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
          <CheckCircle size={14} /> 3. Automated International Gateway
        </span>
        <p style={{ margin: '0', fontSize: '12px', color: '#7F1D1D', lineHeight: '1.4' }}>
          Enforces your exact store logic: automatically disables Cash on Delivery (COD) for global addresses, tracks instant electronic payments securely, and requests mandatory customer checkmarks before custom fabric sizing configurations are confirmed.
        </p>
      </div>

    </div>
  );
}