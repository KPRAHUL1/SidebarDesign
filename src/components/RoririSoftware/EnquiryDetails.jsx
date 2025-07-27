import React, { useState } from 'react';
import { Mail, Phone, Calendar, User, MessageSquare, Filter, Eye } from 'lucide-react';

const EnquiryDetails = () => {
  const [statusFilter, setStatusFilter] = useState('All');

  const enquiries = [
    {
      id: 1,
      name: "Amit Patel",
      email: "amit@example.com",
      phone: "+91 9876543210",
      service: "E-commerce Website",
      budget: "₹2-5 Lakhs",
      status: "New",
      priority: "High",
      date: "2024-01-15",
      message: "Looking for a complete e-commerce solution with payment gateway integration.",
      source: "Website"
    },
    {
      id: 2,
      name: "Riya Singh",
      email: "riya@example.com",
      phone: "+91 8765432109",
      service: "Mobile App Development",
      budget: "₹5-10 Lakhs",
      status: "In Progress",
      priority: "Medium",
      date: "2024-01-12",
      message: "Need a cross-platform mobile app for food delivery service.",
      source: "Referral"
    },
    {
      id: 3,
      name: "Karan Sharma",
      email: "karan@example.com",
      phone: "+91 7654321098",
      service: "CRM System",
      budget: "₹1-3 Lakhs",
      status: "Quoted",
      priority: "Low",
      date: "2024-01-10",
      message: "Custom CRM system for managing customer relationships.",
      source: "LinkedIn"
    }
  ];

  const statuses = ["All", "New", "In Progress", "Quoted", "Closed", "Rejected"];

  const filteredEnquiries = enquiries.filter(enquiry => 
    statusFilter === 'All' || enquiry.status === statusFilter
  );

  const getStatusColor = (status) => {
    const colors = {
      'New': 'bg-blue-100 text-blue-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      'Quoted': 'bg-purple-100 text-purple-800',
      'Closed': 'bg-green-100 text-green-800',
      'Rejected': 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'High': 'bg-red-100 text-red-800',
      'Medium': 'bg-yellow-100 text-yellow-800',
      'Low': 'bg-green-100 text-green-800'
    };
    return colors[priority] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Enquiry Details</h1>
        <p className="text-gray-600 mt-1">Manage and track all customer enquiries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Enquiries</p>
              <p className="text-2xl font-bold text-gray-900">{enquiries.length}</p>
            </div>
            <MessageSquare className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">New</p>
              <p className="text-2xl font-bold text-blue-600">
                {enquiries.filter(e => e.status === 'New').length}
              </p>
            </div>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600">
                {enquiries.filter(e => e.status === 'In Progress').length}
              </p>
            </div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Quoted</p>
              <p className="text-2xl font-bold text-purple-600">
                {enquiries.filter(e => e.status === 'Quoted').length}
              </p>
            </div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-6 border border-gray-100">
        <div className="flex items-center gap-4">
          <Filter className="h-5 w-5 text-gray-400" />
          <select
            className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statuses.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredEnquiries.map((enquiry) => (
          <div key={enquiry.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{enquiry.name}</h3>
                  <p className="text-sm text-gray-600">{enquiry.service}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(enquiry.status)}`}>
                  {enquiry.status}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(enquiry.priority)}`}>
                  {enquiry.priority}
                </span>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-600">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">{enquiry.email}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">{enquiry.phone}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{enquiry.date}</span>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Budget: <span className="font-medium">{enquiry.budget}</span></p>
              <p className="text-sm text-gray-600">Source: <span className="font-medium">{enquiry.source}</span></p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                {enquiry.message}
              </p>
            </div>

            <div className="flex justify-between items-center">
              <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <Eye className="h-4 w-4" />
                View Details
              </button>
              <div className="flex gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                  Follow Up
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm">
                  Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnquiryDetails;