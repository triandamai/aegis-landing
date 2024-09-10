export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admin: {
        Row: {
          created_at: string
          email: string | null
          id: number
          user_uid: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          user_uid?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          user_uid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admin_user_uid_fkey"
            columns: ["user_uid"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      business: {
        Row: {
          business_email: string | null
          business_name: string | null
          business_phone: string | null
          business_scale: string | null
          created_at: string
          id: number
          user_id: string | null
        }
        Insert: {
          business_email?: string | null
          business_name?: string | null
          business_phone?: string | null
          business_scale?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Update: {
          business_email?: string | null
          business_name?: string | null
          business_phone?: string | null
          business_scale?: string | null
          created_at?: string
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox: {
        Row: {
          created_at: string
          email: string
          full_name: string
          id: number
          message: string
          subject: string
        }
        Insert: {
          created_at?: string
          email?: string
          full_name?: string
          id?: number
          message?: string
          subject?: string
        }
        Update: {
          created_at?: string
          email?: string
          full_name?: string
          id?: number
          message?: string
          subject?: string
        }
        Relationships: []
      }
      package_feature: {
        Row: {
          created_at: string
          feature_id: number
          package_id: number
        }
        Insert: {
          created_at?: string
          feature_id: number
          package_id: number
        }
        Update: {
          created_at?: string
          feature_id?: number
          package_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "package_feature_feature_id_fkey"
            columns: ["feature_id"]
            isOneToOne: false
            referencedRelation: "service_feature"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "package_feature_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
        ]
      }
      packages: {
        Row: {
          created_at: string
          description: string | null
          feature_sub_title: string | null
          feature_title: string | null
          icon: string | null
          id: number
          image: string | null
          price: number | null
          recommendation: boolean | null
          slug: string | null
          subtitle: string | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          feature_sub_title?: string | null
          feature_title?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          price?: number | null
          recommendation?: boolean | null
          slug?: string | null
          subtitle?: string | null
          title?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          feature_sub_title?: string | null
          feature_title?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          price?: number | null
          recommendation?: boolean | null
          slug?: string | null
          subtitle?: string | null
          title?: string | null
        }
        Relationships: []
      }
      reservation: {
        Row: {
          book_at: string
          business_id: number | null
          created_at: string
          id: number
          location: string
          package_id: number | null
          service_id: number | null
        }
        Insert: {
          book_at: string
          business_id?: number | null
          created_at?: string
          id?: number
          location: string
          package_id?: number | null
          service_id?: number | null
        }
        Update: {
          book_at?: string
          business_id?: number | null
          created_at?: string
          id?: number
          location?: string
          package_id?: number | null
          service_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reservation_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "business"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservation_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reservation_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_feature: {
        Row: {
          created_at: string
          description: string | null
          id: number
          image: string | null
          name: string | null
          service_id: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          service_id?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          service_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "service_feature_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          created_at: string
          description: string | null
          icon: string | null
          id: number
          image: string | null
          name: string | null
          price: number | null
          slug: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
          slug?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          name?: string | null
          price?: number | null
          slug?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
