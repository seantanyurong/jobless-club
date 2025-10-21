'use client';

import { useState, useEffect } from "react";

function Revenue({ business }: { business: string; }) {
  const [isLoading, setIsLoading] = useState(true);
  const [revenue, setRevenue] = useState(0);

  const getRevenue = async (business: string) => {
    const KSS_PAYNOW_REVENUE = 9264;
    const res = await fetch(`/api/stripe/revenue?business=${business}`);
    const { revenue: stripe_revenue } = await res.json();

    let total_revenue = stripe_revenue / 100;
    if (business === 'kss') {
      total_revenue += KSS_PAYNOW_REVENUE;
    }

    setRevenue(total_revenue);
    setIsLoading(false);
  }

  const formatRevenue = (amount: any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(amount);
  }

  useEffect(() => {
    getRevenue(business);
  }, []);

  return (
    <span>{isLoading ? "Loading..." : formatRevenue(revenue)}</span>
  )
}

export default Revenue