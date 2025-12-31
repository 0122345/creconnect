import { ActivityItem } from "../../pages/components/dashboard/ActivityItem";
import { CategoryPerformance } from "../../pages/components/dashboard/CartegoryPerformance";
import { FeedbackItem } from "../../pages/components/dashboard/FeedbackItem";
import { GeographicInsights } from "../../pages/components/dashboard/GeographicInsights";
import { PlatformManagement } from "../../pages/components/dashboard/PlatformManagement";
import { StatsCard } from "../../pages/components/dashboard/Statscard";
import { TopPerformers } from "../../pages/components/dashboard/TopPerformers";
import  Link  from "next/link";
 
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Creconnect</h1>
          <p className="text-gray-500">Admin Dashboard</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white shadow shadow-md shadow-black hover:bg-indigo-700 active:bg-indigo-800">
          <span className="text-lg leading-none">＋</span>
          <Link href="/studio/CreateStudio"></Link>
          <span>Manage Platform</span>
          </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatsCard title="Total Users" value="100" icon="👤" />
        <StatsCard title="Active Listings" value="342" icon="📅" />
        <StatsCard title="Total Revenue" value="$28,900" icon="💲" />
        <StatsCard title="Commission Earned" value="$4,335" icon="📈" />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Left */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow shadow-md shadow-black">
            <h2 className="font-semibold mb-4">Real-Time platform Activity</h2>
            <div className="space-y-3">
              <ActivityItem name="Alex Chen" action="Booked studio 'Kigali frame house'" amount="$450" time="15m ago" />
              <ActivityItem name="Kalisa Maye" action="Joined as a studio owner" time="1h ago" />
              <ActivityItem name="Umucyo Studio" action="Received payout" amount="$750" time="13m ago" />
              <ActivityItem name="Ishimwe Trickson" action="Joined as a venue owner" time="10m ago" />
              <ActivityItem name="Patrick Mucyo" action="Received payout" amount="$970" time="10m ago" />
            </div>
          </div>

          <TopPerformers />
        </div>

        {/* Right */}
        <div className="space-y-6">
          <CategoryPerformance />
          <GeographicInsights />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow shadow-md shadow-black">
          <h2 className="font-semibold mb-4">People Feedback</h2>
          <div className="space-y-4">
            <FeedbackItem name="Sarah Johnson" time="2h ago" feedback="I loved how the team listened to my ideas and they..." />
            <FeedbackItem name="Claire Latifah" time="1h ago" feedback="The studio space was clean, organized, and a pro..." />
            <FeedbackItem name="Mike Chen" time="1d ago" feedback="I appreciate the creativity and attention to detail..." />
          </div>
        </div>

        <PlatformManagement />
      </div>
    </div>
  );
}
