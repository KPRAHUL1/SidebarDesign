import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, XCircle } from 'lucide-react';

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const attendanceData = [
    { id: 1, name: "Rajesh Kumar", checkIn: "09:15 AM", checkOut: "06:30 PM", status: "Present", hours: "9h 15m" },
    { id: 2, name: "Priya Sharma", checkIn: "09:00 AM", checkOut: "06:00 PM", status: "Present", hours: "9h 00m" },
    { id: 3, name: "Arjun Patel", checkIn: "-", checkOut: "-", status: "Absent", hours: "0h 00m" },
    { id: 4, name: "Sneha Reddy", checkIn: "09:30 AM", checkOut: "06:15 PM", status: "Present", hours: "8h 45m" }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Attendance Management</h1>
        <p className="text-gray-600 mt-1">Track employee attendance and working hours</p>
      </div>

      <div className="bg-white rounded-lg p-4 mb-6 border border-gray-100">
        <div className="flex items-center gap-4">
          <Calendar className="h-5 w-5 text-gray-400" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Daily Attendance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check In</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Check Out</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Working Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {attendanceData.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">{record.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.checkIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.checkOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{record.hours}</td>
                  </tr>
              ))}
                  </tbody>
                  </table>
                  </div>
                  </div>
                  </div>
  )
}
export default Attendance;