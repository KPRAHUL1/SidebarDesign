import React, { useState } from 'react';
import { Search, Plus, Filter, Edit, Trash2, Eye } from 'lucide-react';

const Employee = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const employees = [
    { 
      id: 1, 
      name: "Rajesh Kumar", 
      email: "rajesh@roriri.com",
      position: "Senior Full Stack Developer", 
      department: "Development", 
      salary: "₹85,000", 
      joinDate: "2022-01-15",
      status: "Active",
      avatar: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=3b82f6&color=fff"
    },
    { 
      id: 2, 
      name: "Priya Sharma", 
      email: "priya@roriri.com",
      position: "UI/UX Designer", 
      department: "Design", 
      salary: "₹65,000", 
      joinDate: "2022-03-20",
      status: "Active",
      avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=10b981&color=fff"
    },
    { 
      id: 3, 
      name: "Arjun Patel", 
      email: "arjun@roriri.com",
      position: "Project Manager", 
      department: "Management", 
      salary: "₹95,000", 
      joinDate: "2021-11-10",
      status: "On Leave",
      avatar: "https://ui-avatars.com/api/?name=Arjun+Patel&background=f59e0b&color=fff"
    },
    { 
      id: 4, 
      name: "Sneha Reddy", 
      email: "sneha@roriri.com",
      position: "QA Engineer", 
      department: "Testing", 
      salary: "₹55,000", 
      joinDate: "2023-02-01",
      status: "Active",
      avatar: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=8b5cf6&color=fff"
    }
  ];

  const departments = ["All", "Development", "Design", "Management", "Testing", "Sales"];

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || selectedDepartment === 'All' || employee.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Employee Management</h1>
          <p className="text-gray-600 mt-1">Manage your team members and their information</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus className="h-4 w-4" />
          Add Employee
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search employees by name or email..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept === 'All' ? '' : dept}>{dept}</option>
              ))}
            </select>
            <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src={employee.avatar} 
                  alt={employee.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{employee.name}</h3>
                  <p className="text-sm text-gray-600">{employee.email}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                employee.status === 'Active' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {employee.status}
              </span>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Position:</span>
                <span className="text-sm font-medium">{employee.position}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Department:</span>
                <span className="text-sm font-medium">{employee.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Salary:</span>
                <span className="text-sm font-medium">{employee.salary}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Join Date:</span>
                <span className="text-sm font-medium">{employee.joinDate}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                <Eye className="h-4 w-4" />
                View
              </button>
              <div className="flex gap-2">
                <button className="text-gray-600 hover:text-blue-600 p-1">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="text-gray-600 hover:text-red-600 p-1">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No employees found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or add a new employee.</p>
        </div>
      )}
    </div>
  );
};

export default Employee;