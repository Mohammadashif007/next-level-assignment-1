{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }
    const updateProfile = (profile: Profile, update: Partial<Profile> ): Profile => {
        return {...profile, ...update}
    }

    const profile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };
    const result = updateProfile(profile, {age: 88});
    console.log(result);
}
