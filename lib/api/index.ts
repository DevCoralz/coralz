import { blogPosts, products, projects, services, siteConfig, pricingFaq, tools } from "@/lib/data";
import type { Post, Product, Project, Service } from "@/lib/types";

export interface CoralzApi {
  getPricingFaq(): Promise<typeof pricingFaq>;
  getTools(): Promise<typeof tools>;
  getSiteSettings(): Promise<typeof siteConfig>;
  getProjects(): Promise<Project[]>;
  getProject(slug: string): Promise<Project | undefined>;
  getPosts(): Promise<Post[]>;
  getPost(slug: string): Promise<Post | undefined>;
  getProducts(): Promise<Product[]>;
  getProduct(slug: string): Promise<Product | undefined>;
  getServices(): Promise<Service[]>;
}

const mockApi: CoralzApi = {
  async getPricingFaq() { return pricingFaq; },
  async getTools() { return tools; },
  async getSiteSettings() { return siteConfig; },
  async getProjects() { return projects; },
  async getProject(slug) { return projects.find((item) => item.slug === slug); },
  async getPosts() { return blogPosts; },
  async getPost(slug) { return blogPosts.find((item) => item.slug === slug); },
  async getProducts() { return products; },
  async getProduct(slug) { return products.find((item) => item.slug === slug); },
  async getServices() { return services; },
};

export const api = mockApi;
export const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

export const getSiteSettings = () => api.getSiteSettings();
export const getProjects = () => api.getProjects();
export const getProject = (slug: string) => api.getProject(slug);
export const getPosts = () => api.getPosts();
export const getPost = (slug: string) => api.getPost(slug);
export const getProducts = () => api.getProducts();
export const getProduct = (slug: string) => api.getProduct(slug);
export const getServices = () => api.getServices();

export const getPricingFaq = () => api.getPricingFaq();
export const getTools = () => api.getTools();
