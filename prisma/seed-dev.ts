import { PrismaClient } from "../src/generated/prisma";
import type { User, Program } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting development database seeding...");

  // Create additional users without clearing existing data
  const additionalUsers: User[] = [];
  const newUserNames = [
    "Dev User 1",
    "Test User 2",
    "Sample User 3",
    "Demo User 4",
    "Trial User 5",
  ];

  for (let i = 0; i < newUserNames.length; i++) {
    const name = newUserNames[i];
    const firstName = name.split(" ")[0].toLowerCase();
    const lastName = name.split(" ")[1].toLowerCase();
    const userNumber = name.split(" ")[2];

    try {
      const user = await prisma.user.create({
        data: {
          userId: `DEV${userNumber.padStart(3, "0")}`,
          name: name,
          email: `${firstName}.${lastName}${userNumber}@example.com`,
          mobileNumber: `+91${
            Math.floor(Math.random() * 9000000000) + 1000000000
          }`,
          emails: {
            create: [
              {
                email: `${firstName}.${lastName}${userNumber}@example.com`,
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
                address: `${
                  Math.floor(Math.random() * 999) + 1
                }, Dev Street, Test City`,
                isDefault: true,
              },
            ],
          },
        },
      });
      additionalUsers.push(user);
      console.log(`✅ Created user: ${user.name}`);
    } catch (error) {
      console.log(`⚠️ Skipped creating user ${name} (might already exist)`);
    }
  }

  // Get existing program types to create new programs
  const existingProgramTypes = await prisma.programType.findMany();
  const existingCenters = await prisma.center.findMany();
  const existingTeachers = await prisma.teacher.findMany();

  let additionalPrograms: Program[] = [];
  let participantCount = 0;

  if (
    existingProgramTypes.length > 0 &&
    existingCenters.length > 0 &&
    existingTeachers.length > 0
  ) {
    // Create a few additional programs
    additionalPrograms = [];

    for (let i = 0; i < 3; i++) {
      const programType =
        existingProgramTypes[
          Math.floor(Math.random() * existingProgramTypes.length)
        ];
      const center =
        existingCenters[Math.floor(Math.random() * existingCenters.length)];
      const teacher =
        existingTeachers[Math.floor(Math.random() * existingTeachers.length)];

      const startDate = new Date();
      startDate.setDate(
        startDate.getDate() + Math.floor(Math.random() * 60) + 30
      ); // Programs 30-90 days out

      try {
        const program = await prisma.program.create({
          data: {
            programTypeId: programType.id,
            centerId: center.id,
            primaryTeacherId: teacher.id,
            timing: {
              startDate: startDate.toISOString(),
              endDate: new Date(
                startDate.getTime() + 3 * 24 * 60 * 60 * 1000
              ).toISOString(),
              startTime: "10:00",
              endTime: "16:00",
            },
            tags: ["dev-program", "test-data"],
            registrationOpenDateTime: new Date(),
            registrationCloseDateTime: new Date(
              startDate.getTime() - 5 * 24 * 60 * 60 * 1000
            ),
            scheduled: true,
            shortUrl: `dev-${programType.name
              .toLowerCase()
              .replace(/\s+/g, "-")}-${Date.now()}`,
            feeStructure: [{ type: "dev", price: 1000 }],
            status: "announced",
            metaData: {
              maxParticipants: 25,
              currentParticipants: 0,
              language: "English",
              isDevData: true,
            },
          },
        });
        additionalPrograms.push(program);
        console.log(
          `✅ Created program: ${programType.name} at ${center.name}`
        );
      } catch (error: any) {
        console.log(`⚠️ Could not create program: ${error.message}`);
      }
    }

    // Add participants to new programs (limited by unique constraint)
    participantCount = 0;
    for (
      let i = 0;
      i < Math.min(additionalPrograms.length, additionalUsers.length);
      i++
    ) {
      const program = additionalPrograms[i];
      const user = additionalUsers[i];

      try {
        // Create registration first
        const registration = await prisma.registration.create({
          data: {
            status: "confirmed",
            registrationDateTime: new Date(),
            registrationDetails: {
              paymentStatus: "paid",
              feeType: "dev",
              amountPaid: 1000,
            },
            metaData: {
              referralSource: "dev_testing",
              isDevData: true,
            },
          },
        });

        // Create program participant
        await prisma.programParticipant.create({
          data: {
            programId: program.id,
            registrationId: registration.id,
            userId: user.id,
            metaData: {
              specialRequirements: undefined,
              emergencyContact: {
                name: "Dev Emergency Contact",
                phone: "+91-9999999999",
              },
              isDevData: true,
            },
          },
        });

        participantCount++;
        console.log(
          `✅ Added participant: ${user.name} to program ${program.id}`
        );
      } catch (error: any) {
        console.log(
          `⚠️ Could not add participant ${user.name}: ${error.message}`
        );
      }
    }

    console.log(`✅ Created ${participantCount} additional participants`);
  } else {
    console.log(
      "⚠️ No existing program types, centers, or teachers found. Run full seed first."
    );
  }

  // Create some test leads
  const testLeads = [
    { name: "Test Lead 1", email: "testlead1@example.com" },
    { name: "Test Lead 2", email: "testlead2@example.com" },
  ];

  for (const leadData of testLeads) {
    try {
      const existingPrograms = await prisma.program.findMany();
      if (existingPrograms.length > 0) {
        const program =
          existingPrograms[Math.floor(Math.random() * existingPrograms.length)];

        await prisma.lead.create({
          data: {
            name: leadData.name,
            email: leadData.email,
            mobileNumber: `+91${
              Math.floor(Math.random() * 9000000000) + 1000000000
            }`,
            programId: program.id,
            metaData: {
              source: "dev_testing",
              interest_level: "high",
              preferred_contact: "email",
              isDevData: true,
            },
          },
        });
        console.log(`✅ Created test lead: ${leadData.name}`);
      }
    } catch (error: any) {
      console.log(
        `⚠️ Could not create lead ${leadData.name}: ${error.message}`
      );
    }
  }

  console.log("\n🎉 Development database seeding completed!");
  console.log("\n📊 Added:");
  console.log(`   👥 Additional Users: ${additionalUsers.length}`);
  console.log(`   🎯 Additional Programs: ${additionalPrograms.length}`);
  console.log(`   🎓 Additional Participants: ${participantCount}`);
  console.log(`   🎯 Test Leads: ${testLeads.length}`);
}

main()
  .catch((e) => {
    console.error("❌ Error during dev seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
