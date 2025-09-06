export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  role: 'admin' | 'customer';
  created_at: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'template' | 'pdf';
  image_url: string;
  file_url: string;
  preview_url?: string;
  tags: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Purchase {
  id: string;
  user_id: string;
  product_id: string;
  stripe_payment_intent_id: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
  product?: Product;
  user?: User;
}

export interface CartItem {
  product: Product;
  quantity: number;
}