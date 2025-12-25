'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { skills as baseSkills, experiences, projects, startup } from '@/data/resume';
import {
  Boxes,
  Braces,
  Code2,
  Database,
  FlaskConical,
  GitBranch,
  GanttChartSquare,
  Hammer,
  MessageSquare,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

export default function Skills() {
  const t = useTranslations('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    'sap',
    'integration',
    'programming',
    'databases',
    'testing',
    'patterns',
    'devops',
    'project_management',
    'analytics',
    'documentation',
    'tracking',
    'ide',
    'version_control',
    'messaging',
    'tools'
  ] as const;

  const categoryIcons: Record<(typeof categories)[number], React.ComponentType<{ className?: string }>> = {
    sap: Boxes,
    integration: Braces,
    programming: Code2,
    databases: Database,
    testing: FlaskConical,
    patterns: ShieldCheck,
    devops: Hammer,
    project_management: GanttChartSquare,
    analytics: TrendingUp,
    documentation: Braces,
    tracking: GanttChartSquare,
    ide: Code2,
    version_control: GitBranch,
    messaging: MessageSquare,
    tools: Hammer
  };

  const normalize = (v: string) => v.trim().toLowerCase();

  const inferred = useMemo(() => {
    const baseCategoryByName = new Map(baseSkills.map((s) => [normalize(s.name), s.category]));

    const experienceTools = experiences.flatMap((e) => e.tools ?? []);
    const projectTech = projects.flatMap((p) => p.technologies ?? []);
    const startupTech = startup?.technologies ?? [];

    const all = [...experienceTools, ...projectTech, ...startupTech]
      .filter((x): x is string => typeof x === 'string' && x.trim().length > 0)
      .map((x) => x.trim());

    // Пользователь попросил убрать Web Frameworks — не показываем эти элементы даже если они встречаются в опыте
    const excluded = new Set(['react', 'vue', 'angular', 'svelte']);

    const unique = new Map<string, string>();
    for (const item of all) {
      const key = normalize(item);
      if (excluded.has(key)) continue;
      if (!unique.has(key)) unique.set(key, item);
    }

    return [...unique.values()].map((name) => {
      const key = normalize(name);
      const category = baseCategoryByName.get(key) ?? 'tools';
      return { name, category };
    });
  }, []);

  const baseSkillNames = useMemo(() => new Set(baseSkills.map((s) => normalize(s.name))), []);

  const mergedSkills = useMemo(() => {
    const seen = new Set<string>();
    const merged: Array<{ name: string; category: string }> = [];

    const push = (s: { name: string; category: string }) => {
      const key = normalize(s.name);
      if (seen.has(key)) return;
      seen.add(key);
      merged.push(s);
    };

    // сначала базовые навыки (для нормальной категоризации)
    for (const s of baseSkills) push(s);
    // затем все технологии из опыта/проектов/стартапа (fallback -> tools)
    for (const s of inferred) push(s);

    return merged;
  }, [inferred]);

  const skillsByCategory = useMemo(() => {
    // Пользователь попросил: Tools показываем только те инструменты, которых не было в базовом списке навыков
    const toolsNewOnly = mergedSkills.filter(
      (s) => s.category === 'tools' && !baseSkillNames.has(normalize(s.name))
    );

    const groups = categories
      .map((cat) => {
        const skills = cat === 'tools' ? toolsNewOnly : mergedSkills.filter((s) => s.category === cat);
        return { category: cat, skills };
      })
      .filter((g) => g.skills.length > 0);

    const maxCount = Math.max(1, ...groups.map((g) => g.skills.length));

    return {
      groups,
      maxCount
    };
  }, [baseSkillNames, mergedSkills]);

  return (
    <section ref={ref} id="skills" className="relative py-5 bg-[var(--background)] overflow-hidden">
      <div className="editorial-divider" />
      
      {/* Black and white decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bw-decorative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-full blur-3xl" />
        </motion.div>
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-64 bw-decorative"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 0.08, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-500 rounded-lg" />
        </motion.div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-[var(--content-max-width)] relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="editorial-small mb-4">
            <span className="text-[var(--muted)]">04</span>
            <span className="lime-text ml-2">•</span>
          </div>
          <h2 className="editorial-h2 mb-4">{t('title')}</h2>
          <div className="editorial-line-accent-lime" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsByCategory.groups.map((categoryGroup, index) => {
            const Icon = categoryIcons[categoryGroup.category];
            const count = categoryGroup.skills.length;
            return (
            <motion.div
              key={categoryGroup.category}
              className="border border-[var(--border)] p-6 bg-[var(--background)] hover:lime-border transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center border border-[var(--border)] group-hover:lime-border transition-colors">
                    <Icon className="w-5 h-5 lime-text" />
                  </div>
                  <div>
                    <h3 className="editorial-h3 group-hover:lime-text transition-colors">
                {t(`categories.${categoryGroup.category}`)}
              </h3>
                    <div className="text-xs uppercase tracking-wider text-[var(--muted)] mt-1">
                      {count} skills
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.015, delayChildren: index * 0.02 } }
                }}
              >
                {categoryGroup.skills.map((skill, i) => (
                  <motion.span
                    key={`${skill.name}-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      show: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="px-3 py-1 text-sm font-sans text-[var(--foreground)] border border-[var(--border)] hover:lime-border hover:lime-text transition-colors"
                    whileHover={{ y: -1 }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}

