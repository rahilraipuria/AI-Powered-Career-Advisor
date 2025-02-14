import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useAuthStore from "@/zustand/authStore";
import { api } from "@/utils/constants";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
export function PersonalInfo() {
  const { user } = useAuthStore();
  const [firstName, setFirstName] = useState(user.name.firstName);
  const [lastName, setLastName] = useState(user.name.lastName);
  const handleSubmit=async ()=>{
    const response=api.post("/users/updatePersonal",{
      firstName,lastName
    })
    console.log((await response).data.data.user)
  }
  return (
    <Card className="bg-gray-900 border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">
          Personal Information
        </CardTitle>
        <CardDescription className="text-gray-400">
          Provide your basic personal details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-white">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              className="bg-gray-800 text-white border-gray-700"
              value={user.name.firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-white">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              className="bg-gray-800 text-white border-gray-700"
              value={user.name.lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            className="bg-gray-800 text-white border-gray-700"
            defaultValue={user.email}
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            className="bg-gray-800 text-white border-gray-700"
            defaultValue="........."
            disabled
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="profilePicture" className="text-white">
            Profile Picture
          </Label>
          <Input
            id="profilePicture"
            name="profilePicture"
            type="file"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div className="space-y-2">
        <Button
              type="button"
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
            >
              Submit
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
