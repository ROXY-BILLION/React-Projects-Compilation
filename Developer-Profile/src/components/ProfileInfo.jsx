function ProfileInfo() {
    const User = {
        name: "Okeke Divine Gift",
        role: "Software Engineer",
        location: "Lagos , Nigeria",
        availability: true
    }
    return (
        <>
            <h1>{User.name}</h1>
            <h2>{User.role}</h2>
            <h3>{User.location}</h3>
            <p>{User.availability ? "available for work":"not available"}</p>
        </>
    )
}
export default ProfileInfo;