// src/api/index.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import http from "./http";

// Registration
export const useSignupMutation = () => {
  return useMutation({
    mutationFn: ({ payload, endpoint }) => http.post(`/${endpoint}`, payload),
  });
};


export const useUpdateUserMutation = () => {
   const queryClient=useQueryClient()
  return useMutation({
    mutationFn: ({ payload, endpoint }) => http.patch(`/${endpoint}`, payload),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ["profile"]})
    }
  });
};
export const useUpdateSocialLinksMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: (payload) => http.patch(`/c/me/update-social-links`, payload),
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ["profile"]})
    }
  });
};

export const useResendOtpMutation = () => {
  return useMutation({
    mutationFn: async (payload) => {
      return http.post("/users/me/resend-otp", payload);
    }
  });
};
export const useChangePasswordMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: async (payload) => {
      return http.post("/users/me/upate-password", payload);
    },
onSuccess:()=>{
  queryClient.invalidateQueries({queryKey: ["profile"]})
}
  });
};
export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: async (payload) => {
      return http.post("/users/me/reset-password", payload);
    },
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: async (payload) => {
      return http.post("/users/me/forgot-password-email", payload);
    }
  });
};

export const useVerifyEmailMutation = () => {
  return useMutation({
    mutationFn: (payload) => http.post("/users/me/verify", payload),
    onSuccess: (data) => {
      localStorage.setItem("gigastarToken", data.token);
    }
  });
};
export const useVerifyResetOtpMutation = () => {
  return useMutation({
    mutationFn: (payload) => http.post("/users/me/verify-OTP", payload),
  });
};


export const useChangeProfileImageMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: async (payload) => {
      return http.post("/users/me/update-profileImage", payload);
    },
    onSuccess:()=>{
      queryClient.invalidateQueries({queryKey: ["profile"]})
    }
  });
};


// Login
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (payload) => http.post("/users/login", payload),
    onSuccess: (data) => {
      localStorage.setItem("gigastarToken", data.token);
    }
  });
};

// Profile
export const useGetProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response = await http.get("/users/me");
      if (response?.data?.data?.role == 'creator') {
        const res = await http.get("/c/me");
        console.log({user:response.data.data, profile:res.data});
        const data ={...res.data, role:response.data.data.role, creator:{...res.data.creator,imageUrl:response.data.data.imageUrl, role:response.data.data.role, email:response.data.data.email, status:response.data.data.status, wallet:response.data.data.wallet, passwordUpdatedAt: response.data.data.passwordUpdatedAt,}};
        console.log({gottenData:data});
        
        return data;
      }
      else if (response?.data?.data?.role == 'brand') {
        const res = await http.get("/b/me");
        console.log({user:response.data.data, profile:res.data});
        const data ={...res.data, role:response.data.data.role, brand:{...res.data.brand, imageUrl:response.data.data.imageUrl, role:response.data.data.role, isRegistered:true, email:response.data.data.email, status:response.data.data.status, wallet:response.data.data.wallet, passwordUpdatedAt: response.data.data.passwordUpdatedAt,}};
        
        return data;
      }
    },
    enabled: !!localStorage.getItem("gigastarToken"),
    staleTime: 5 * 60 * 1000,
  });
};
export const useGetAllCreators = () => {
  return useQuery({
    queryKey: ["creators"],
    queryFn: async () => {
      const res = await http.get("/c");
  return res.data.creators
    },
  });
};


export const useGetNotification = () => {
  return useQuery({
    queryKey: ["notifications"],
    queryFn: () => {
      return http.get("/users/me/get-notification");
    },
  });
};

export const useDeleteMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: (id) => {
     return http.delete(`/users/me/delete-notification/${id}`)
    },
onSuccess:()=>{
  queryClient.invalidateQueries({queryKey: ["notifications"]})
}
  });
}

export const useMarkMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: () => {
     return http.put(`/users/me/markAsRead`)
    },
onSuccess:()=>{
  queryClient.invalidateQueries({queryKey: ["notifications"]})
}
  });
}

export const useMarkTransactionMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: () => {
     return http.put(`/users/me/markTransactionsAsViewed`)
    },
onSuccess:()=>{
  queryClient.invalidateQueries({queryKey: ["profile"]})
}
  });
}


export const useCreateWalletMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: (payload) => {
     return http.post("/users/me/create-wallet", payload)
    },
onSuccess:()=>{
  queryClient.invalidateQueries({queryKey: ["profile"]})
}
  });
}

export const useFundWalletMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: (payload) => {
     return http.post("/users/me/fund-wallet", payload)
    },
onSuccess:()=>{
  queryClient.invalidateQueries({queryKey: ["profile"]})
}
  });
}
export const useWithdrawFromWalletMutation = () => {
  const queryClient=useQueryClient()
  return useMutation({
    mutationFn: (payload) => {
     return http.post("/users/me/withdraw", payload)
    },
onSuccess:()=>{
  queryClient.invalidateQueries({queryKey: ["profile"]})
}
  });
}