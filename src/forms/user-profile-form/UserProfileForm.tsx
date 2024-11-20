import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import LoadingButton from "../../components/LoadingButton";
import { User } from "../../types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(), //readonly field
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema), //handle validation
    defaultValues: currentUser //sets the initial values of the form fields to currentUser
  });

  useEffect(() => {
    form.reset(currentUser); //resets the form values to currentUser whenever currentUser changes
  }, [currentUser, form])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 5) {
      form.setError("images", { message: "You can upload up to 5 images" });
      return;
    }
    form.setValue("images", files);
  
    // Create preview URLs
    const urls = files.map(file => URL.createObjectURL(file));
    setImagePreviewUrls(urls);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-orange-100 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">User Profile Form</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage /> {/* display ant message fetched to this field */}
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
  control={form.control}
  name="images"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Images (Max 5)</FormLabel>
      <FormControl>
        <Input 
          type="file" 
          accept="image/*" 
          multiple 
          onChange={handleImageChange}
          className="bg-white"
        />
      </FormControl>
      <FormMessage />
      <div className="flex flex-wrap gap-2 mt-2">
        {imagePreviewUrls.map((url, index) => (
          <img key={index} src={url} alt={`Preview ${index + 1}`} className="w-20 h-20 object-cover" />
        ))}
      </div>
    </FormItem>
  )}
/>
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
