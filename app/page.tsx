"use client";
import { redirect } from 'next/navigation';

export default async function HomePage() {
  redirect('/authenticate');
}
