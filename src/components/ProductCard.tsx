import React from 'react';
import { ShoppingCart, Eye, Download } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onPreview?: (product: Product) => void;
  isPurchased?: boolean;
  onDownload?: (product: Product) => void;
}

export function ProductCard({ 
  product, 
  onAddToCart, 
  onPreview, 
  isPurchased = false,
  onDownload 
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          {onPreview && (
            <button
              onClick={() => onPreview(product)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
            >
              <Eye className="w-4 h-4 inline mr-2" />
              Aperçu
            </button>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.category === 'template' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {product.category === 'template' ? 'Template' : 'PDF'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-indigo-600">
            {product.price}€
          </span>

          {isPurchased ? (
            <button
              onClick={() => onDownload?.(product)}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger</span>
            </button>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Ajouter</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}