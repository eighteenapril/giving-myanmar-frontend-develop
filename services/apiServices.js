// API Services for Giving Myanmar Platform

// Helper function to get API base URL
const getApiBaseUrl = () => {
	return process.env.NEXT_PUBLIC_API_URL || '';
};

// Helper function to get auth headers
const getAuthHeaders = () => {
	const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
	return {
		'Content-Type': 'application/json',
		...(token && { Authorization: `Bearer ${token}` })
	};
};

// ============================================
// 1. CAUSES API SERVICES
// ============================================

export const getCausesServices = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/causes`, { 
		cache: 'no-store' 
	});
	const data = await res.json();
	return data;
};

export const getCauseDetailsServices = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/causes/${id}`, { 
		cache: 'no-store' 
	});
	const data = await res.json();
	return data;
};

// ============================================
// 2. DONATIONS API SERVICES
// ============================================

export const getCampaignsServices = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaigns`, { 
		cache: 'no-store' 
	});
	const data = await res.json();
	return data;
};

export const getCampaignDetailsServices = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/campaigns/${id}`, { 
		cache: 'no-store' 
	});
	const data = await res.json();
	return data;
};

// ============================================
// 3. USER AUTHENTICATION & PROFILE SERVICES
// ============================================

export const registerUserServices = async (userData) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doner/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	});
	const data = await res.json();
	return data;
};

export const loginUserServices = async (credentials) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doner/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});
	const data = await res.json();
	
	// Store token in localStorage if login successful
	if (data.token) {
		localStorage.setItem('token', data.token);
	}

	return data;
};

export const getUserProfileServices = async () => {
	const res = await fetch(`/api/doner/detail`, {
		method: 'GET',
		headers: getAuthHeaders(),
		cache: 'no-store'
	});
	const data = await res.json();
	return data;
};

export const getUserDonationHistoryServices = async (userId) => {
	const res = await fetch(`/api/doner/${userId}/donations`, {
		method: 'GET',
		headers: getAuthHeaders(),
		cache: 'no-store'
	});
	const data = await res.json();
	return data;
};

export const getUserEventHistoryServices = async (userId) => {
	const res = await fetch(`/api/doner/${userId}/events`, {
		method: 'GET',
		headers: getAuthHeaders(),
		cache: 'no-store'
	});
	const data = await res.json();
	return data;
};

export const logoutUserServices = () => {
	localStorage.removeItem('token');
	// Optionally redirect to login page or refresh
	window.location.href = '/';
};

// ============================================
// 4. PAYMENT API SERVICES
// ============================================

export const createDonationPaymentServices = async (paymentData) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/donate`, {
		method: 'POST',
		headers: getAuthHeaders(),
		body: JSON.stringify(paymentData),
	});
	const data = await res.json();
	return data;
};

// ============================================
// 5. EVENTS API SERVICES
// ============================================

export const getEventsServices = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, { 
		cache: 'no-store' 
	});
	const data = await res.json();
	return data;
};

export const getEventDetailsServices = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/${id}`, { 
		cache: 'no-store' 
	});
	const data = await res.json();
	return data;
};

export const registerEventServices = async (registrationData) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events/register`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(registrationData),
	});
	const data = await res.json();
	return data;
};

// ============================================
// 6. UTILITY SERVICES
// ============================================

export const checkAuthStatus = () => {
	if (typeof window === 'undefined') return false;
	const token = localStorage.getItem('token');
	return !!token;
};

export const getStoredToken = () => {
	if (typeof window === 'undefined') return null;
	return localStorage.getItem('token');
};

export const storeToken = (token) => {
	localStorage.setItem('token', token);
}

export const removeStoredToken = () => {
	localStorage.removeItem('token');
};

// Error handling wrapper for API calls
export const apiCallWithErrorHandling = async (apiFunction, ...args) => {
	try {
		const result = await apiFunction(...args);
		return { success: true, data: result };
	} catch (error) {
		console.error('API Error:', error);
		return { success: false, error: error.message };
	}
};