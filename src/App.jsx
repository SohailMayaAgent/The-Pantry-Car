import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Public Site
import PublicSite from './PublicSite';

// Admin Auth & Layout
import LoginPage from './pages/admin/LoginPage';
import AdminLayout from './pages/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';

// Admin Pages
import AdminReservations from './pages/admin/AdminReservations';
import AdminEnquiries from './pages/admin/AdminEnquiries';
import AdminMenu from './pages/admin/AdminMenu';

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public Website */}
                    <Route path="/" element={<PublicSite />} />

                    {/* Admin Authentication */}
                    <Route path="/admin/login" element={<LoginPage />} />

                    {/* Secured Admin Dashboard */}
                    <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin', 'staff']} />}>
                        <Route element={<AdminLayout />}>
                            <Route index element={<Navigate to="reservations" replace />} />
                            <Route path="reservations" element={<AdminReservations />} />
                            <Route path="enquiries" element={<AdminEnquiries />} />
                            <Route path="menu" element={<AdminMenu />} />
                        </Route>
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}
