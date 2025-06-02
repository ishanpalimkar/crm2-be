import { PrismaClient } from "../src/generated/prisma";
import type {
  User,
  Teacher,
  Volunteer,
  Program,
  Center,
  ProgramType,
  Resource,
} from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data (optional - comment out if you want to preserve data)
  await prisma.programParticipant.deleteMany();
  await prisma.registration.deleteMany();
  await prisma.program.deleteMany();
  await prisma.lead.deleteMany();
  await prisma.teacherEligibility.deleteMany();
  await prisma.teacher.deleteMany();
  await prisma.volunteer.deleteMany();
  await prisma.programResource.deleteMany();
  await prisma.participantResource.deleteMany();
  await prisma.resource.deleteMany();
  await prisma.programType.deleteMany();
  await prisma.center.deleteMany();
  await prisma.address.deleteMany();
  await prisma.mobileNumber.deleteMany();
  await prisma.email.deleteMany();
  await prisma.user.deleteMany();

  console.log("✅ Cleared existing data");

  // Create Users
  const users: User[] = [];
  const userNames = [
    "Arjun Sharma",
    "Priya Patel",
    "Rahul Kumar",
    "Sneha Gupta",
    "Vikram Singh",
    "Anita Desai",
    "Ravi Joshi",
    "Kavya Nair",
    "Amit Verma",
    "Neha Agarwal",
    "Sanjay Yadav",
    "Pooja Mehta",
    "Rajesh Khanna",
    "Sunita Roy",
    "Manoj Tiwari",
    "Deepika Reddy",
    "Harsh Malhotra",
    "Swati Bansal",
    "Kiran Jain",
    "Mohit Pandey",
  ];

  for (let i = 0; i < userNames.length; i++) {
    const name = userNames[i];
    const firstName = name.split(" ")[0].toLowerCase();
    const lastName = name.split(" ")[1].toLowerCase();

    const user = await prisma.user.create({
      data: {
        userId: `AOL${String(i + 1).padStart(4, "0")}`,
        name: name,
        email: `${firstName}.${lastName}@example.com`,
        mobileNumber: `+91${
          Math.floor(Math.random() * 9000000000) + 1000000000
        }`,
        emails: {
          create: [
            {
              email: `${firstName}.${lastName}@example.com`,
              isDefault: true,
            },
          ],
        },
        mobileNumbers: {
          create: [
            {
              mobileNumber: `+91${
                Math.floor(Math.random() * 9000000000) + 1000000000
              }`,
              isDefault: true,
            },
          ],
        },
        addresses: {
          create: [
            {
              address: `${Math.floor(Math.random() * 999) + 1}, ${
                [
                  "MG Road",
                  "Brigade Road",
                  "Commercial Street",
                  "Indiranagar",
                  "Koramangala",
                  "Whitefield",
                ][Math.floor(Math.random() * 6)]
              }, Bangalore`,
              isDefault: true,
            },
          ],
        },
      },
    });
    users.push(user);
  }

  console.log(`✅ Created ${users.length} users`);

  // Create Centers
  const centers: Center[] = await Promise.all([
    prisma.center.create({
      data: {
        name: "Art of Living Ashram",
        centerType: "ashram",
        description: "Main ashram center with residential facilities",
        address: "Udayagiri, Kanakapura Road",
        city: "Bangalore",
        state: "Karnataka",
        country: "India",
        pincode: "560082",
        contactNumber: "+91-80-28432900",
        email: "ashram@artofliving.org",
        capacity: 500,
        geoLocation: { lat: 12.8062, lng: 77.4347 },
        createdBy: { userId: "ADMIN001", name: "System Admin" },
        metaData: { hasAccommodation: true, hasKitchen: true },
      },
    }),
    prisma.center.create({
      data: {
        name: "Art of Living Mumbai Center",
        centerType: "TOK",
        description: "Urban center for programs in Mumbai",
        address: "Juhu Beach Road",
        city: "Mumbai",
        state: "Maharashtra",
        country: "India",
        pincode: "400049",
        contactNumber: "+91-22-26600000",
        email: "mumbai@artofliving.org",
        capacity: 200,
        geoLocation: { lat: 19.076, lng: 72.8777 },
        createdBy: { userId: "ADMIN001", name: "System Admin" },
        metaData: { hasAccommodation: false, hasKitchen: true },
      },
    }),
    prisma.center.create({
      data: {
        name: "Art of Living Delhi Center",
        centerType: "GyanKshetra",
        description: "Knowledge center for Delhi region",
        address: "Vasant Kunj",
        city: "Delhi",
        state: "Delhi",
        country: "India",
        pincode: "110070",
        contactNumber: "+91-11-26890000",
        email: "delhi@artofliving.org",
        capacity: 150,
        geoLocation: { lat: 28.5355, lng: 77.169 },
        createdBy: { userId: "ADMIN001", name: "System Admin" },
        metaData: { hasAccommodation: false, hasKitchen: false },
      },
    }),
  ]);

  console.log(`✅ Created ${centers.length} centers`);

  // Create Program Types
  const programTypes: ProgramType[] = await Promise.all([
    prisma.programType.create({
      data: {
        name: "Happiness Program",
        description: "Basic stress elimination and wellness program",
        metaData: {
          duration: "3 days",
          level: "beginner",
          category: "wellness",
        },
        feeStructure: [
          { type: "regular", price: 2500 },
          { type: "early_bird", price: 2000 },
          { type: "student", price: 1500 },
        ],
        preRequisites: undefined,
      },
    }),
    prisma.programType.create({
      data: {
        name: "Part 1 Course",
        description: "Advanced breathing techniques and meditation",
        metaData: {
          duration: "5 days",
          level: "intermediate",
          category: "spiritual",
        },
        feeStructure: [
          { type: "regular", price: 5000 },
          { type: "early_bird", price: 4500 },
          { type: "student", price: 3500 },
        ],
        preRequisites: { requiredCourses: ["Happiness Program"] },
      },
    }),
    prisma.programType.create({
      data: {
        name: "Sahaj Samadhi Meditation",
        description: "Effortless meditation technique",
        metaData: {
          duration: "2 days",
          level: "beginner",
          category: "meditation",
        },
        feeStructure: [
          { type: "regular", price: 3500 },
          { type: "early_bird", price: 3000 },
          { type: "student", price: 2500 },
        ],
        preRequisites: undefined,
      },
    }),
    prisma.programType.create({
      data: {
        name: "YES+ Course",
        description: "Youth empowerment and stress management",
        metaData: {
          duration: "4 days",
          level: "beginner",
          category: "youth",
          ageGroup: "18-30",
        },
        feeStructure: [
          { type: "regular", price: 2000 },
          { type: "early_bird", price: 1500 },
          { type: "student", price: 1000 },
        ],
        preRequisites: undefined,
      },
    }),
  ]);

  console.log(`✅ Created ${programTypes.length} program types`);

  // Create Teachers (using some of the users)
  const teachers: Teacher[] = [];
  const teacherUsers = users.slice(0, 5); // First 5 users become teachers

  for (let i = 0; i < teacherUsers.length; i++) {
    const user = teacherUsers[i];
    const teacher = await prisma.teacher.create({
      data: {
        userId: user.id,
        teacherCode: `TCH${String(i + 1).padStart(3, "0")}`,
        status: "active",
        isActive: true,
        isSearchable: true,
        isOnboarded: true,
        eligibility: {
          create: programTypes.map((pt) => ({
            programId: pt.id,
            metaData: {
              certificationDate: new Date(),
              experienceYears: Math.floor(Math.random() * 10) + 1,
            },
          })),
        },
      },
    });
    teachers.push(teacher);
  }

  console.log(`✅ Created ${teachers.length} teachers`);

  // Create Volunteers (using some of the remaining users)
  const volunteers: Volunteer[] = [];
  const volunteerUsers = users.slice(5, 10); // Next 5 users become volunteers

  for (const user of volunteerUsers) {
    const volunteer = await prisma.volunteer.create({
      data: {
        userId: user.id,
      },
    });
    volunteers.push(volunteer);
  }

  console.log(`✅ Created ${volunteers.length} volunteers`);

  // Create Programs
  const programs: Program[] = [];

  for (let i = 0; i < 10; i++) {
    const programType =
      programTypes[Math.floor(Math.random() * programTypes.length)];
    const center = centers[Math.floor(Math.random() * centers.length)];
    const teacher = teachers[Math.floor(Math.random() * teachers.length)];

    const startDate = new Date();
    startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 90)); // Programs within next 90 days

    const program = await prisma.program.create({
      data: {
        programTypeId: programType.id,
        centerId: center.id,
        primaryTeacherId: teacher.id,
        timing: {
          startDate: startDate.toISOString(),
          endDate: new Date(
            startDate.getTime() + 3 * 24 * 60 * 60 * 1000
          ).toISOString(), // 3 days later
          startTime: "09:00",
          endTime: "17:00",
        },
        tags: ["beginner-friendly", "weekend"],
        registrationOpenDateTime: new Date(),
        registrationCloseDateTime: new Date(
          startDate.getTime() - 7 * 24 * 60 * 60 * 1000
        ), // Close 7 days before
        scheduled: true,
        shortUrl: `aol-${programType.name.toLowerCase().replace(/\s+/g, "-")}-${
          i + 1
        }`,
        feeStructure: programType.feeStructure as any,
        status: ["draft", "announced", "in-progress"][
          Math.floor(Math.random() * 3)
        ],
        metaData: {
          maxParticipants: Math.floor(Math.random() * 50) + 20,
          currentParticipants: 0,
          language: "English",
        },
      },
    });
    programs.push(program);
  }

  console.log(`✅ Created ${programs.length} programs`);

  // Create Registrations and Program Participants
  // NOTE: Due to unique constraint on programId in ProgramParticipant,
  // each program can only have one participant
  const participantUsers = users.slice(10); // Remaining users become participants
  let participantCount = 0;

  for (let i = 0; i < Math.min(programs.length, participantUsers.length); i++) {
    const program = programs[i];
    const user = participantUsers[i];

    // Create registration first
    const registration = await prisma.registration.create({
      data: {
        status: "confirmed",
        registrationDateTime: new Date(),
        registrationDetails: {
          paymentStatus: "paid",
          feeType: "regular",
          amountPaid: 2500,
        },
        metaData: {
          referralSource: ["website", "friend", "social_media", "teacher"][
            Math.floor(Math.random() * 4)
          ],
        },
      },
    });

    // Create program participant (only one per program due to unique constraint)
    await prisma.programParticipant.create({
      data: {
        programId: program.id,
        registrationId: registration.id,
        userId: user.id,
        metaData: {
          specialRequirements: undefined,
          emergencyContact: {
            name: "Emergency Contact",
            phone: "+91-9999999999",
          },
        },
      },
    });

    participantCount++;
  }

  console.log(`✅ Created ${participantCount} program participants`);

  // Create Resources
  const resources: Resource[] = await Promise.all([
    prisma.resource.create({
      data: {
        name: "Sudarshan Kriya Guide",
        description: "Step-by-step guide for Sudarshan Kriya practice",
        url: "https://resources.artofliving.org/sk-guide.pdf",
        type: "pdf",
        metaData: { category: "practice", language: "English" },
      },
    }),
    prisma.resource.create({
      data: {
        name: "Meditation Music Collection",
        description: "Peaceful music for meditation practice",
        url: "https://resources.artofliving.org/meditation-music.mp3",
        type: "audio",
        metaData: { category: "music", duration: "45 minutes" },
      },
    }),
    prisma.resource.create({
      data: {
        name: "Yoga Asanas Video",
        description: "Basic yoga postures demonstration",
        url: "https://resources.artofliving.org/yoga-asanas.mp4",
        type: "video",
        metaData: { category: "yoga", duration: "30 minutes" },
      },
    }),
  ]);

  console.log(`✅ Created ${resources.length} resources`);

  // Assign resources to some participants
  const participantResourceCount = Math.min(participantCount, 15);
  for (let i = 0; i < participantResourceCount; i++) {
    const user = participantUsers[i];
    const resource = resources[Math.floor(Math.random() * resources.length)];

    await prisma.participantResource.create({
      data: {
        userId: user.id,
        resourceId: resource.id,
        metaData: {
          accessLevel: "full",
          downloadCount: Math.floor(Math.random() * 5),
        },
      },
    });
  }

  console.log(`✅ Assigned resources to participants`);

  // Create some leads
  const leads: any[] = [];
  const leadNames = [
    "Interested Person 1",
    "Potential Student 2",
    "Curious Seeker 3",
    "Wellness Enthusiast 4",
    "Meditation Practitioner 5",
  ];

  for (let i = 0; i < leadNames.length; i++) {
    const name = leadNames[i];
    const program = programs[Math.floor(Math.random() * programs.length)];

    const lead = await prisma.lead.create({
      data: {
        name: name,
        email: `lead${i + 1}@example.com`,
        mobileNumber: `+91${
          Math.floor(Math.random() * 9000000000) + 1000000000
        }`,
        programId: program.id,
        metaData: {
          source: "website_inquiry",
          interest_level: ["high", "medium", "low"][
            Math.floor(Math.random() * 3)
          ],
          preferred_contact: ["email", "phone", "whatsapp"][
            Math.floor(Math.random() * 3)
          ],
        },
      },
    });
    leads.push(lead);
  }

  console.log(`✅ Created ${leads.length} leads`);

  console.log("\n🎉 Database seeding completed successfully!");
  console.log("\n📊 Summary:");
  console.log(`   👥 Users: ${users.length}`);
  console.log(`   🏫 Centers: ${centers.length}`);
  console.log(`   📚 Program Types: ${programTypes.length}`);
  console.log(`   👨‍🏫 Teachers: ${teachers.length}`);
  console.log(`   🤝 Volunteers: ${volunteers.length}`);
  console.log(`   🎯 Programs: ${programs.length}`);
  console.log(`   🎓 Participants: ${participantCount}`);
  console.log(`   📖 Resources: ${resources.length}`);
  console.log(`   🎯 Leads: ${leads.length}`);
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
