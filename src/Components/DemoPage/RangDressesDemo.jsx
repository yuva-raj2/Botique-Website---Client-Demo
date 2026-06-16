import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, MessageSquare, Check, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';
import SasiSastiOptimization from './SasiSastiOptimization';

export default function SindiraDemo() {
  const [selectedSize, setSelectedSize] = useState({ 1: 'M', 2: 'L' });
  const [isOrdered, setIsOrdered] = useState({ 1: false, 2: false });
  const [activeCategory, setActiveCategory] = useState('All');

  // Updated products data with explicit categories matching your filter pills
  const products = [
    {
      id: 1,
      name: "Premium Modal Silk Co-ord Set",
      category: "Co-ords", // Added category
      tag: "Trending • Office to Occasion",
      price: "₹2,199",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
      desc: "Breathable modal silk fabric designed for the modern working woman. Features a relaxed shirt silhouette with tailored trousers."
    },
    {
      id: 2,
      name: "Indowestern Flared Motif Skirt & Dress",
      category: "Dresses", // Added category
      tag: "Best Seller • Everyday Luxury",
      price: "₹2,699",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=600&auto=format&fit=crop",
      desc: "Traditional roots meet modern trends. Rich flare with a clean waistband. Perfect pairing for crop tops or shirts."
    }
  ];

  const categories = ['All', 'Dresses', 'Co-ords', 'Kurtis', 'Sarees'];

  // This is what needs to be mapped over in the return block
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleWhatsAppRedirect = (productId, productName) => {
    setIsOrdered(prev => ({ ...prev, [productId]: true }));
    
    setTimeout(() => {
      const size = selectedSize[productId];
      const message = `Hi Raang Dresses Team! ✨\n\nI just viewed your automated mobile catalog demo and would love to secure an order for:\n\n🛍️ *Product:* ${productName}\n📏 *Size:* ${size}\n⏳ *Delivery:* 20-25 Days Accepted\n\nPlease let me know the next steps for payment verification!`;
      const encodedText = encodeURIComponent(message);
      window.open(`https://wa.me/917995628702?text=${encodedText}`, '_blank');
      setIsOrdered(prev => ({ ...prev, [productId]: false }));
    }, 800);
  };

  return (
    /* Outer desktop center presentation wrapper */
    <div style={{ width: '100%', minHeight: '100vh', background: '#1a1a1a', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
      
      <div style={{ 
          width: '100%',
          maxWidth: '450px', 
          background: '#FBFBFA', 
          minHeight: '100vh', 
          paddingBottom: '60px', 
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
          boxShadow: '0 0 40px rgba(0,0,0,0.3)'}}>
        
        {/* Top Professional Banner */}
        <div style={{ background: '#111', color: '#FFF', padding: '10px', textAlign: 'center', fontSize: '11px', letterSpacing: '1px', fontWeight: '500' }}>
          ✨ PROTOTYPE STOREFRONT FOR RANG DRESSES • GLOBAL SHIPPING
        </div>

        {/* Premium Navbar */}
        <div style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 50, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #EFEFEF' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '20px', fontWeight: '700', letterSpacing: '1.5px', color: '#111' }}>RANG DRESSES</h1>
            <p style={{ margin: 0, fontSize: '11px', color: '#777', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Indowwestern for the modern woman</p>
          </div>
          <div style={{ background: '#F0F0F0', padding: '8px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShoppingBag size={14} color="#111" />
            <span style={{ fontSize: '12px', fontWeight: '600' }}>24/7 Live</span>
          </div>
        </div>

        {/* Pitch Intro Alert Box */}
        <div style={{ margin: '16px', padding: '16px', background: '#EBF5FF', border: '1px solid #BFDBFE', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
            <Sparkles size={16} color="#1D4ED8" />
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#1E40AF' }}>Yuvaraj's Optimization Concept</span>
          </div>
          <p style={{ margin: 0, fontSize: '12px', color: '#1E3A8A', lineHeight: '1.5' }}>
            This responsive layout eliminates manual back-and-forth by instantly letting your customers select sizes and check out directly via automated WhatsApp packets.
          </p>
        </div>

        {/* Interactive Category Filter Bar for Rang */}
        <div style={{ padding: '0 16px', marginBottom: '20px' }}>
          <span style={{ fontSize: '11px', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '10px' }}>
            Browse Collections
          </span>
          
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 16px',
                  background: activeCategory === cat ? '#111' : '#FFF',
                  color: activeCategory === cat ? '#FFF' : '#333',
                  border: activeCategory === cat ? '1px solid #111' : '1px solid #EAEAEA',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === cat ? '0 4px 10px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Feed: Swapped out 'products' for 'filteredProducts' */}
        <div style={{ padding: '0 16px' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} style={{ background: '#FFF', borderRadius: '16px', border: '1px solid #EAEAEA', overflow: 'hidden', marginBottom: '24px' }}>
                
                {/* Image Container */}
                <div style={{ width: '100%', height: '420px', position: 'relative', background: '#ECECEC' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#111', color: '#FFF', padding: '6px 12px', fontSize: '11px', fontWeight: '600', letterSpacing: '0.5px', borderRadius: '4px' }}>
                    {product.tag}
                  </span>
                </div>

                {/* Product Meta */}
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h3 style={{ margin: 0, fontSize: '17px', fontWeight: '600', color: '#111', width: '70%' }}>{product.name}</h3>
                    <span style={{ fontSize: '18px', fontWeight: '700', color: '#111' }}>{product.price}</span>
                  </div>
                  
                  <p style={{ margin: '0 0 16px 0', fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
                    {product.desc}
                  </p>

                  {/* Size Selector Grid */}
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#888', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Select Size</span>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(prev => ({ ...prev, [product.id]: size }))}
                          style={{
                            width: '42px',
                            height: '42px',
                            border: selectedSize[product.id] === size ? '2px solid #111' : '1px solid #DDD',
                            background: selectedSize[product.id] === size ? '#111' : '#FFF',
                            color: selectedSize[product.id] === size ? '#FFF' : '#333',
                            borderRadius: '8px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Instant WhatsApp Checkout Button */}
                  <button
                    onClick={() => handleWhatsAppRedirect(product.id, product.name)}
                    style={{
                      width: '100%',
                      padding: '14px',
                      background: isOrdered[product.id] ? '#111' : '#25D366',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isOrdered[product.id] ? (
                      <>
                        <Check size={16} /> Creating secure checkout packet...
                      </>
                    ) : (
                      <>
                        <MessageSquare size={16} /> Instant WhatsApp Checkout
                        <ArrowRight size={14} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            /* Empty state if they filter to Kurtis/Sarees during the demo */
            <div style={{ padding: '40px 20px', textAlign: 'center', background: '#FFF', borderRadius: '12px', border: '1px dashed #DDD', marginBottom: '24px' }}>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Demo item slot for this category is ready to sync live catalog data.</p>
            </div>
          )}
        </div>

        {/* Operational Trust Badges */}
        <div style={{ padding: '0 20px', textAlign: 'center', color: '#888', fontSize: '12px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Smartphone size={14} /> Mobile Optimized</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><ShieldCheck size={14} /> No Client Overhead</span>
          </div>
          <p style={{ margin: 0, fontSize: '11px', color: '#AAA' }}>Demo architecture engineered by Yuvaraj</p>
        </div>

        <SasiSastiOptimization/>
      </div>
    </div>
  );
}