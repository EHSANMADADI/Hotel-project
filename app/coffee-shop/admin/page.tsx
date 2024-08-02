'use client'
import Admin from '@/components/user/pages/cafe/Admin'
import React from 'react'
import useStore from '@/store/Store';
import NotAvailable from '@/components/shared/NotAvailable/NotAvailabel';

const AdminPage = () => {
    const { isAdmin, changeRole } = useStore();
    if (isAdmin) {
        return <Admin />
    }
    else{
        return <NotAvailable/>
    }

}

export default AdminPage