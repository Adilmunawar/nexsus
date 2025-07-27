
import { AnimatedSection } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';
import { Linkedin, ExternalLink, MapPin, Award } from 'lucide-react';

export const Management = () => {
  const profiles = [
    {
      name: 'Adil Munawar',
      title: 'Web Developer - Junior SQL DB Administrator - Project Manager',
      company: 'Nexsus Orbits',
      location: 'Lahore, Punjab, Pakistan',
      linkedin: 'https://www.linkedin.com/in/adilmunawar/',
      image: '/lovable-uploads/4cd54bce-feeb-4e64-800a-b3e34c4ec757.png',
      coverImage: '/lovable-uploads/fe759b26-ccb4-448b-a95f-f45bb2b90e0e.png',
      description: 'Transforming ideas into digital reality with innovative solutions.',
      skills: ['JavaScript', 'React', 'Node.js', 'SQL', 'Project Management'],
      experience: '3+ Years'
    },
    {
      name: 'Zoya Ali',
      title: 'Web Developer',
      company: 'Nexsus Orbits Pakistan',
      location: 'Lahore, Punjab, Pakistan',
      linkedin: 'https://www.linkedin.com/in/zoyyaali/',
      image: '/lovable-uploads/5ff4a69b-2320-4b74-aa83-c6fb050e643e.png',
      coverImage: '/lovable-uploads/a0cb972d-4d5c-4e0a-a35d-cf053ef2c014.png',
      description: 'We don\'t develop programs. We build great systems.',
      skills: ['Web Development', 'System Architecture', 'Frontend', 'Backend'],
      experience: '3+ Years'
    }
  ];

  return (
    <section id="management" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-primary">Leadership Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with our talented professionals driving innovation and excellence with 3+ years of experience
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-card/90 backdrop-blur-sm rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden"
            >
              {/* Cover Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={profile.coverImage} 
                  alt={`${profile.name} Cover`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Profile Content */}
              <div className="relative px-6 py-6">
                {/* Profile Picture positioned below cover */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full border-4 border-background shadow-xl overflow-hidden bg-background">
                      <img 
                        src={profile.image} 
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Online Status Indicator */}
                    <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Name, Title, and Company Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground mb-1">{profile.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{profile.title}</p>
                    <p className="text-muted-foreground text-sm mb-2">{profile.company}</p>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <MapPin className="h-3 w-3" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-foreground italic font-medium text-sm mb-6 px-2">"{profile.description}"</p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Core Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/15 rounded-full text-xs font-medium text-primary border border-primary/30 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* LinkedIn Button */}
                <div className="flex justify-center">
                  <motion.a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
                  >
                    <Linkedin className="h-5 w-5" />
                    Connect on LinkedIn
                    <ExternalLink className="h-4 w-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company LinkedIn */}
        <AnimatedSection className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-primary/15 to-primary/5 backdrop-blur-sm rounded-3xl p-8 text-foreground max-w-2xl mx-auto border border-primary/30 relative overflow-hidden"
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-20 h-20 bg-primary rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary rounded-full blur-2xl"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Linkedin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Follow Our Company</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                Stay updated with our latest projects and company insights from our 3+ years journey
              </p>
              <motion.a
                href="https://www.linkedin.com/company/nexsus-orbits"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25"
              >
                <Linkedin className="h-5 w-5" />
                Nexsus Orbits Pakistan
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
