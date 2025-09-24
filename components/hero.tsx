import { Github, Mail, Linkedin, Twitter, MapPin, Download, Phone } from "lucide-react";
import { getProfileData } from "@/lib/content";

export function Hero() {
  const profile = getProfileData();

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{profile.name}</h1>
            <p className="text-lg text-muted-foreground mb-3">
              {profile.title}
            </p>
            <div className="flex items-center justify-center md:justify-start text-sm text-muted-foreground mb-6">
              <MapPin className="h-4 w-4 mr-1" />
              {profile.location}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {profile.photo && (
            <div className="flex-shrink-0 order-first md:order-last">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto"
              />
            </div>
          )}
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          {profile.resume && (
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          )}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={profile.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
          {profile.phone && (
            <a
              href={`tel:${profile.phone}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
