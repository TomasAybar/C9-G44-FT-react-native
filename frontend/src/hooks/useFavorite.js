import React, { useState, useEffect } from 'react';
import { favoriteRequest } from '../api/favoriteRequest';
import { useUserStore } from '../store/userStore';

export const useFavorite = (productid) => {


  const [reload, setReload] = useState(false)

  const handleReload = () => setReload(!reload)

  return {
    reload,
    handleReload
  }
}